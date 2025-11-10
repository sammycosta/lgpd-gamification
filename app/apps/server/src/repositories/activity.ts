import { and, eq, inArray } from "drizzle-orm";
import { db } from "../db";
import {
  activities,
  matchingPairs,
  qnaDetails,
  qnaOptions,
  userActivities,
} from "../db/schema";

export async function getActivityById(activityId: number) {
  return await db
    .select({
      id: activities.id,
      moduleId: activities.moduleId,
      points: activities.points,
      typeId: activities.typeId,
    })
    .from(activities)
    .where(eq(activities.id, activityId))
    .get();
}

export async function getActivitiesByModuleId(
  userId: string,
  moduleId: number
) {
  return db
    .select({
      id: activities.id,
      name: activities.name,
      typeId: activities.typeId,
      points: activities.points,
      isCorrect: userActivities.isCorrect,
      // Detalhes de cada tipo, se forem FLAT
      question: qnaDetails.question,
      isMultiple: qnaDetails.isMultiple,
    })
    .from(activities)
    .where(eq(activities.moduleId, moduleId))
    .leftJoin(
      userActivities,
      and(
        eq(userActivities.activityId, activities.id),
        eq(userActivities.userId, userId)
      )
    )
    .leftJoin(qnaDetails, eq(activities.id, qnaDetails.activityId))
    .orderBy(activities.id)
    .all();
}

export async function getQnaDetailsByActivityId(activityId: number) {
  return db
    .select({ isMultiple: qnaDetails.isMultiple })
    .from(qnaDetails)
    .where(eq(qnaDetails.activityId, activityId))
    .get();
}

export async function getCorrectQnaOptionsByActivityId(activityId: number) {
  return db
    .select({ id: qnaOptions.id })
    .from(qnaOptions)
    .where(and(eq(qnaOptions.activityId, activityId), qnaOptions.isCorrect))
    .all();
}

export async function getQnaOptionsByActivityIds(activityIds: number[]) {
  const rows = await db
    .select({
      id: qnaOptions.id,
      activityId: qnaOptions.activityId,
      text: qnaOptions.text,
      isCorrect: qnaOptions.isCorrect,
    })
    .from(qnaOptions)
    .where(inArray(qnaOptions.activityId, activityIds))
    .all();

  return rows.reduce((acc, row) => {
    if (!acc[row.activityId]) {
      acc[row.activityId] = [];
    }
    acc[row.activityId].push(row);
    return acc;
  }, {} as Record<number, typeof rows>);
}

export async function getMatchingPairsByActivityIds(activityIds: number[]) {
  const rows = await db
    .select({
      id: matchingPairs.id, //Ver depois se é necessário em algum momento
      activityId: matchingPairs.activityId,
      concept: matchingPairs.concept,
      definition: matchingPairs.definition,
    })
    .from(matchingPairs)
    .where(inArray(matchingPairs.activityId, activityIds))
    .all();

  return rows.reduce((acc, row) => {
    if (!acc[row.activityId]) {
      acc[row.activityId] = [];
    }
    acc[row.activityId].push(row);
    return acc;
  }, {} as Record<number, typeof rows>);
}

export async function getMatchingPairsByActivityId(activityId: number) {
  return db
    .select({
      concept: matchingPairs.concept,
      definition: matchingPairs.definition,
    })
    .from(matchingPairs)
    .where(eq(matchingPairs.activityId, activityId))
    .all();
}
