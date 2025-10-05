import { db, DrizzleClient } from "@/db";
import { avatars, titles, users } from "@/db/schema";
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

export async function getUserPointsById(userId: number) {
  return db
    .select({ points: users.points })
    .from(users)
    .where(eq(users.id, userId))
    .get();
}

export async function updateUserPoints(
  userId: number,
  points: number,
  dbClient: DrizzleClient = db
) {
  return db.update(users).set({ points }).where(eq(users.id, userId)).run();
}
