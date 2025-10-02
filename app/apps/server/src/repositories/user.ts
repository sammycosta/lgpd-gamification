import { db } from "@/db";
import { avatars, badgeTypes, titles, userBadges, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserById(userId: number) {
  return db
    .select({
      name: users.name,
      points: users.points,
      title: titles.name,
      avatarPath: avatars.filePath,
    })
    .from(users)
    .innerJoin(avatars, eq(users.avatarId, avatars.id))
    .innerJoin(titles, eq(users.titleId, titles.id))
    .where(eq(users.id, userId))
    .get();
}

export async function getUserBadgesById(userId: number) {
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
