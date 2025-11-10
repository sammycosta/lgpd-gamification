import { eq } from "drizzle-orm";
import type { DrizzleClient } from "../db";
import { db } from "../db";
import {
  avatars,
  titles,
  userActivities,
  userModules,
  users,
} from "../db/schema";
import { userBadges } from "../db/schema/user";

export async function getUserById(userId: string) {
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

export async function getUserPointsById(userId: string) {
  return db
    .select({ points: users.points })
    .from(users)
    .where(eq(users.id, userId))
    .get();
}

export async function updateUserPoints(
  userId: string,
  points: number,
  dbClient: DrizzleClient = db
) {
  return dbClient
    .update(users)
    .set({ points })
    .where(eq(users.id, userId))
    .run();
}

export async function updateUserAvatarId(userId: string, avatarId: number) {
  return db.update(users).set({ avatarId }).where(eq(users.id, userId)).run();
}

// TODO: Camada repository Avatar seria bom.
export async function getAvatars() {
  return db
    .select({ id: avatars.id, filePath: avatars.filePath })
    .from(avatars)
    .all();
}

export async function getAvatarsIds() {
  return db.select({ id: avatars.id }).from(avatars).all();
}

export async function deleteUserBadges(userId: string) {
  await db.delete(userBadges).where(eq(userBadges.userId, userId));
}

export async function deleteUserActivities(userId: string) {
  await db.delete(userActivities).where(eq(userActivities.userId, userId));
}

export async function deleteUserModules(userId: string) {
  await db.delete(userModules).where(eq(userModules.userId, userId));
}
