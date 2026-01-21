import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { activities, qnaDetails, userActivities } from "../db/schema";

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
  moduleId: number,
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
        eq(userActivities.userId, userId),
      ),
    )
    .leftJoin(qnaDetails, eq(activities.id, qnaDetails.activityId))
    .orderBy(activities.id)
    .all();
}
