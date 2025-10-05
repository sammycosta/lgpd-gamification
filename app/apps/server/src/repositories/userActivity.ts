import { db, DrizzleClient } from "@/db";
import { userActivities } from "@/db/schema/userModule";
import { and, eq } from "drizzle-orm";

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
