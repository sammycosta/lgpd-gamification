import { db, DrizzleClient } from "@/db";
import { userModules, users } from "@/db/schema";
import {
  getUserById,
  getUserPointsById,
  updateUserPoints,
} from "@/repositories/user";
import {
  createUserBadge,
  deleteUserBadge,
  getUserBadgeById,
  getUserBadgesById,
} from "@/repositories/userBadge";
import type { User } from "better-auth";
import { eq } from "drizzle-orm";
import {
  calculateLevel,
  calculateProgressPercent,
  getHighestAchievedBadge,
  pointsRequiredByLevel,
} from "./utils";

export async function getUserInfo(userId: string) {
  const userInfo = await getUserById(userId);
  if (!userInfo) return null;

  const badges = await getUserBadgesById(userId);

  // TODO: Rever toda a lógica a seguir no futuro;
  const level = calculateLevel(userInfo.points);
  const progressPercent = calculateProgressPercent(userInfo.points);
  const requiredLevelPoints = pointsRequiredByLevel[level + 1] ?? 0;
  const requiredPointsToNextLevel =
    requiredLevelPoints !== 0 ? requiredLevelPoints - userInfo.points : 0;

  return {
    ...userInfo,
    level,
    requiredLevelPoints,
    requiredPointsToNextLevel,
    progressPercent,
    badgeCount: badges.length,
    badges,
  };
}

// retornar daqui
export async function grantUserBadges(
  userId: string,
  moduleId: number,
  oldProgress: number,
  newProgress: number,
  dbClient: DrizzleClient
) {
  if (newProgress <= oldProgress) return;

  const highestAchievedType = getHighestAchievedBadge(newProgress);

  if (!highestAchievedType) return;

  const currentBadge = await getUserBadgeById(userId, moduleId);
  if (currentBadge) {
    await deleteUserBadge(currentBadge.id, dbClient);
  }
  await createUserBadge(userId, moduleId, highestAchievedType, dbClient);

  return highestAchievedType;
}

export async function updateUserProgress(
  userId: string,
  incrementPoints: number,
  dbClient: DrizzleClient
) {
  const user = await getUserPointsById(userId);
  const newPoints = user!.points + incrementPoints;
  await updateUserPoints(userId, newPoints, dbClient);
}

export async function handleNewUser(user: User) {
  await db
    .update(users)
    .set({ avatarId: 1, titleId: 1 })
    .where(eq(users.id, user.id))
    .execute();

  await db.insert(userModules).values({ userId: user.id, moduleId: 1 });

  // // MOCK para me ajudar a testar atividades, deixando todos os módulos desbloqueados por padrão.
  // await db
  //   .insert(userModules)
  //   .values(
  //     [2, 3, 4, 5, 6, 7].map((num) => ({ userId: user.id, moduleId: num }))
  //   );
}
