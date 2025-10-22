import { db } from "@/db";
import {
  getActivitiesByModuleId,
  getActivityById,
  getQnaOptionsByActivityIds,
} from "@/repositories/activity";
import {
  createUserActivity,
  getUserActivity,
  updateUserActivity,
} from "@/repositories/userActivity";
import { ActivityTypes } from "@/types/entities";
import { ActivitiesQnaInfo, QnaData } from "@/types/service";
import { updateModuleProgress } from "../moduleService";
import { updateUserProgress } from "../userService";
import { checkers } from "./check";
import { mapActivityStatus, mapQnaData } from "./mappers";
import {
  validateActivityExists,
  validateSupportedActivityType,
  validateUserActivityEditable,
} from "./validators";

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
    };
  });
}

export async function submitActivityResult(
  userId: number,
  activityId: number,
  answer: unknown
) {
  const activity = await getActivityById(activityId);

  validateActivityExists(activity);
  validateSupportedActivityType(activity.typeId);

  const isCorrect = await checkers[activity.typeId](activityId, answer);
  const userActivity = await getUserActivity(userId, activity.id);

  validateUserActivityEditable(userActivity);

  await db.transaction(async (tx) => {
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

  return isCorrect;
}
