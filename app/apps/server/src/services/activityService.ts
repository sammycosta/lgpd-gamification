import { db } from "@/db";
import {
  getActivitiesByModuleId,
  getActivityById,
  getCorrectQnaOptionsByActivityId,
  getQnaDetailsByActivityId,
  getQnaOptionsByActivityIds,
} from "@/repositories/activity";
import {
  createUserActivity,
  getUserActivity,
  updateUserActivity,
} from "@/repositories/userActivity";
import { ActivityStatus } from "@/types/api";
import { ActivityTypes } from "@/types/entities";
import { QnaData, QnaOptionsByActivityId } from "@/types/service";
import { arraysEqualIgnoreOrder } from "@/util/array";
import { TRPCError } from "@trpc/server";
import { ActivitiesQnaInfo } from "../types/service";
import { updateModuleProgress } from "./moduleService";
import { updateUserProgress } from "./userService";

function mapActivityStatus(isCorrect: boolean | null): ActivityStatus {
  if (isCorrect === null) return ActivityStatus.TODO;
  return isCorrect ? ActivityStatus.CORRECT : ActivityStatus.WRONG;
}

function mapQnaData(
  activity: ActivitiesQnaInfo,
  qnaOptionsMap: QnaOptionsByActivityId
): QnaData {
  const rawOptions = qnaOptionsMap[activity.id] || [];
  const answers: number[] = [];

  const options = rawOptions.map((option) => {
    const { isCorrect, activityId, ...rest } = option;
    if (isCorrect) {
      answers.push(option.id);
    }
    return rest;
  });

  return {
    question: activity.question,
    options,
    answers,
    isMultiple: activity.isMultiple,
  };
}

export async function getActivities(userId: number, moduleId: number) {
  const activities = await getActivitiesByModuleId(userId, moduleId);
  const qnaActivityIds = activities
    .filter(({ typeId }) => typeId == ActivityTypes.QNA)
    .map(({ id }) => id);
  const qnaOptions = await getQnaOptionsByActivityIds(qnaActivityIds);

  return activities.map((activity) => {
    const baseActivity = {
      id: activity.id,
      name: activity.name,
      status: mapActivityStatus(activity.isCorrect),
      points: activity.points,
      moduleId,
      type: activity.typeId,
    };
    let specificData: QnaData | {} = {};

    if (activity.typeId == ActivityTypes.QNA) {
      specificData = mapQnaData(activity as ActivitiesQnaInfo, qnaOptions);
    } // Possibilidade de mapear para mais tipos de atividade.

    return {
      ...baseActivity,
      data: specificData,
    }; // Ter uns tipos mais adequados aqui depois.
  });
}

export async function submitActivityResult(
  userId: number,
  activityId: number,
  answer: unknown
) {
  const activity = await getActivityById(activityId);

  if (!activity) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Atividade não existe.",
    });
  }

  let isCorrect = false;

  switch (activity.typeId) {
    case ActivityTypes.QNA:
      isCorrect = await checkQnAAnswer(activityId, answer);
      break;
    default:
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Tipo de atividade não suportado",
      });
  }

  await recordActivityResult(userId, activity, isCorrect);
  return isCorrect;
}

async function recordActivityResult(
  userId: number,
  activity: { id: number; moduleId: number; points: number },
  isCorrect: boolean
) {
  const userActivity = await getUserActivity(userId, activity.id);

  if (userActivity && userActivity.isCorrect) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Não é possível alterar atividades já corretas.",
    });
  }

  return db.transaction(async (tx) => {
    if (!userActivity) {
      await createUserActivity(userId, activity.id, isCorrect, tx);
    } else {
      await updateUserActivity(userActivity.id, isCorrect, tx);
    }
    if (isCorrect) {
      await updateModuleProgress(userId, activity, tx);
      await updateUserProgress(userId, activity.points, tx);
    }
  });
}

// TODO: organizar melhor as validações e arquivos separados.
async function checkQnAAnswer(activityId: number, answer: unknown) {
  const qnaDetails = await getQnaDetailsByActivityId(activityId);
  const correctQnaOptions = await getCorrectQnaOptionsByActivityId(activityId);
  const correctOptions = correctQnaOptions.map((value) => value.id);

  if (!qnaDetails || correctOptions.length == 0) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Não foi possível encontrar respostas corretas para a questão.",
    });
  }

  if (qnaDetails.isMultiple) {
    const invalidType =
      !Array.isArray(answer) || answer.some((item) => typeof item !== "number");

    if (invalidType) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Resposta de múltipla escolha deve ser um array de IDs.",
      });
    }

    return arraysEqualIgnoreOrder(answer as number[], correctOptions);
  }

  if (typeof answer !== "number") {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Resposta de escolha única deve ser um ID numérico.",
    });
  }

  if (correctOptions.length !== 1) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message:
        "Erro de dados: Questão de escolha única tem múltiplas respostas corretas no DB.",
    });
  }

  return answer === correctOptions[0];
}
