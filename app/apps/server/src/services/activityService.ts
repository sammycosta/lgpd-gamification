import { db } from "@/db";
import {
  createUserActivity,
  getActivitiesByModuleId,
  getActivityById,
  getQnaOptionsByActivityIds,
  getUserActivity,
  updateUserActivity,
} from "@/repositories/activity";
import { TRPCError } from "@trpc/server";
import { updateModuleProgress } from "./moduleService";

const QNA = 1; //FAZER ENUM

// mesmo do front, organizar depois
export enum ActivityStatus {
  TODO,
  WRONG,
  CORRECT,
}

function mapActivityStatus(isCorrect: boolean | null): ActivityStatus {
  if (isCorrect === null) return ActivityStatus.TODO;
  return isCorrect ? ActivityStatus.CORRECT : ActivityStatus.WRONG;
}

// TODO: Tipar corretamente
function mapQnaData(activity: any, qnaOptionsMap: any) {
  const rawOptions = qnaOptionsMap[activity.id] || [];
  const answers: number[] = [];

  const options = rawOptions.map((option: any) => {
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
    .filter(({ typeId }) => typeId == QNA)
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
    let data: any = {};

    if (activity.typeId == QNA) {
      data = mapQnaData(activity, qnaOptions);
    } // Possibilidade de mapear para mais tipos de atividade.

    return {
      ...baseActivity,
      data,
    }; // Ter uns tipos mais adequados aqui depois.
  });
}

export async function submitActivityResult(
  userId: number,
  activityId: number,
  isCorrect: boolean
) {
  const activity = await getActivityById(activityId);

  if (!activity) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Atividade não existe.",
    });
  }

  const userActivity = await getUserActivity(userId, activityId);

  if (userActivity && userActivity.isCorrect) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Não é possível alterar atividades já corretas.",
    });
  }

  return db.transaction(async (tx) => {
    if (!userActivity) {
      await createUserActivity(userId, activityId, isCorrect, tx);
    } else {
      await updateUserActivity(userActivity.id, isCorrect, tx);
    }
    if (isCorrect) {
      await updateModuleProgress(userId, activity, tx);
    }
  });
}
