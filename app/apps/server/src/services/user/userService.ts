import { db, DrizzleClient } from "@/db";
import { userModules, users } from "@/db/schema";
import {
  deleteUserActivities,
  deleteUserBadges,
  deleteUserModules,
  getAvatarsIds,
  getUserById,
  getUserPointsById,
  getAvatars as repositoryGetAvatars,
  updateUserAvatarId,
  updateUserPoints,
} from "@/repositories/user";
import {
  createUserBadge,
  deleteUserBadge,
  getUserBadgeById,
  getUserBadgesById,
} from "@/repositories/userBadge";
import { TRPCError } from "@trpc/server";
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

  // TODO: Rever corretude dessa lógica com mais testes;
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

  if (currentBadge && currentBadge.typeId === highestAchievedType) {
    return;
  }

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

  // MOCK para me ajudar a testar atividades, deixando todos os módulos desbloqueados por padrão.
  // await db
  //   .insert(userModules)
  //   .values([2, 3, 4, 6, 7].map((num) => ({ userId: user.id, moduleId: num })));
}

export async function getAvatars() {
  return await repositoryGetAvatars();
}

export async function updateUserAvatar(userId: string, avatarId: number) {
  const avatarIds = await getAvatarsIds();
  // TODO: Move to Specific Validator
  if (!avatarIds || !avatarIds.some((avatar) => avatar.id === avatarId)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "ID de Avatar Inválido",
    });
  }
  await updateUserAvatarId(userId, avatarId);
}

export async function handleBeforeDeleteUser(userId: string) {
  // TODO: Ação mais rara, mas fazer em mesma transação?
  await deleteUserBadges(userId);
  await deleteUserActivities(userId);
  await deleteUserModules(userId);
}
