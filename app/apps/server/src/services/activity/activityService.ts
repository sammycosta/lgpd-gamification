import { db } from "@/db";
import {
  getActivitiesByModuleId,
  getActivityById,
  getMatchingPairsByActivityIds,
  getQnaOptionsByActivityIds,
} from "@/repositories/activity";
import {
  createUserActivity,
  getUserActivity,
  updateUserActivity,
} from "@/repositories/userActivity";
import { ActivityTypes, BadgeTypes } from "@/types/entities";
import {
  ActivitiesInfoBase,
  ActivitiesQnaInfo,
  MatchingData,
  QnaData,
} from "@/types/service";
import { updateModuleProgress } from "../module/moduleService";
import { updateUserProgress } from "../user/userService";
import { checkers } from "./check";
import { mapActivityStatus, mapMatchingData, mapQnaData } from "./mappers";
import {
  validateActivityExists,
  validateSupportedActivityType,
  validateUserActivityEditable,
} from "./validators";

export async function getActivities(userId: string, moduleId: number) {
  const activities = await getActivitiesByModuleId(userId, moduleId);

  const qnaActivityIds = activities
    .filter(({ typeId }) => typeId == ActivityTypes.QNA)
    .map(({ id }) => id);
  const qnaOptions = await getQnaOptionsByActivityIds(qnaActivityIds);

  const matchingActivityIds = activities
    .filter(({ typeId }) => typeId == ActivityTypes.MATCHING)
    .map(({ id }) => id);
  const matchingPairs = await getMatchingPairsByActivityIds(
    matchingActivityIds
  );

  return activities
    .map((activity) => {
      let data: QnaData | MatchingData;

      switch (activity.typeId) {
        case ActivityTypes.QNA:
          data = mapQnaData(activity as ActivitiesQnaInfo, qnaOptions);
          break;
        case ActivityTypes.MATCHING:
          data = mapMatchingData(activity as ActivitiesInfoBase, matchingPairs);
          break;
        default:
          return undefined;
      }

      return {
        id: activity.id,
        name: activity.name,
        status: mapActivityStatus(activity.isCorrect),
        points: activity.points,
        moduleId,
        type: activity.typeId,
        data,
      };
    })
    .filter((item) => item !== undefined);
}

export async function submitActivityResult(
  userId: string,
  activityId: number,
  answer: unknown
) {
  const activity = await getActivityById(activityId);

  validateActivityExists(activity);
  validateSupportedActivityType(activity.typeId);

  const isCorrect = await checkers[activity.typeId](activityId, answer);
  const userActivity = await getUserActivity(userId, activity.id);

  validateUserActivityEditable(userActivity);

  let achievedBadge: BadgeTypes | undefined;

  await db.transaction(async (tx) => {
    if (!userActivity) {
      await createUserActivity(userId, activity.id, isCorrect, tx);
    } else {
      await updateUserActivity(userActivity.id, isCorrect, tx);
    }
    if (isCorrect) {
      achievedBadge = await updateModuleProgress(userId, activity, tx);
      await updateUserProgress(userId, activity.points, tx);
      // TODO: (Futuro?) Notificar Level UP
    }
  });

  return { isCorrect, achievedBadge };
}
