import { and, eq } from "drizzle-orm";
import type { DrizzleClient } from "../db";
import { db } from "../db";
import { badgeTypes, userBadges } from "../db/schema";
import { BadgeTypes } from "../types/entities";

export async function getUserBadgesById(userId: string) {
  return db
    .select({
      moduleId: userBadges.moduleId,
      type: badgeTypes.name,
    })
    .from(userBadges)
    .innerJoin(badgeTypes, eq(userBadges.typeId, badgeTypes.id))
    .where(eq(userBadges.userId, userId))
    .all();
}
export async function getUserBadgeById(userId: string, moduleId: number) {
  return db
    .select({ id: userBadges.id, typeId: userBadges.typeId })
    .from(userBadges)
    .where(
      and(eq(userBadges.userId, userId), eq(userBadges.moduleId, moduleId))
    )
    .get();
}

export async function createUserBadge(
  userId: string,
  moduleId: number,
  typeId: BadgeTypes,
  dbClient: DrizzleClient = db
) {
  return dbClient.insert(userBadges).values({ userId, moduleId, typeId }).run();
}

export async function deleteUserBadge(
  userBadgeId: number,
  dbClient: DrizzleClient = db
) {
  return dbClient
    .delete(userBadges)
    .where(eq(userBadges.id, userBadgeId))
    .run();
}
