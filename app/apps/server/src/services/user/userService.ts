import { DrizzleClient } from "@/db";
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
import {
  calculateLevel,
  calculateProgressPercent,
  getHighestAchievedBadge,
  pointsRequiredByLevel,
} from "./utils";

export async function getUserInfo(userId: number) {
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

export async function grantUserBadges(
  userId: number,
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
}

export async function updateUserProgress(
  userId: number,
  incrementPoints: number,
  dbClient: DrizzleClient
) {
  const user = await getUserPointsById(userId);
  const newPoints = user!.points + incrementPoints;
  await updateUserPoints(userId, newPoints, dbClient);
}
