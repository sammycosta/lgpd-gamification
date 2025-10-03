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
