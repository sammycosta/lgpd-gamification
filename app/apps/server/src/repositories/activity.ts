import { db } from "@/db";
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
