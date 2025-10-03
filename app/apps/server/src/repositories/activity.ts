import { db, DrizzleClient } from "@/db";
import { activities, qnaDetails, qnaOptions } from "@/db/schema";
import { userActivities } from "@/db/schema/userModule";
import { and, eq, inArray } from "drizzle-orm";

export async function getActivitiesByModuleId(
  userId: number,
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

export async function getUserActivity(userId: number, activityId: number) {
  return await db
    .select({ id: userActivities.id, isCorrect: userActivities.isCorrect })
    .from(userActivities)
    .where(
      and(
        eq(userActivities.userId, userId),
        eq(userActivities.activityId, activityId)
      )
    )
    .get();
}

export async function createUserActivity(
  userId: number,
  activityId: number,
  isCorrect: boolean,
  dbClient: DrizzleClient = db
) {
  return await dbClient
    .insert(userActivities)
    .values({ userId, activityId, isCorrect })
    .run();
}

export async function updateUserActivity(
  userActivityId: number,
  isCorrect: boolean,
  dbClient: DrizzleClient = db
) {
  return await dbClient
    .update(userActivities)
    .set({ isCorrect })
    .where(eq(userActivities.id, userActivityId))
    .run();
}

export async function getActivityById(activityId: number) {
  return await db
    .select({ moduleId: activities.moduleId, points: activities.points })
    .from(activities)
    .where(eq(activities.id, activityId))
    .get();
}
