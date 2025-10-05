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
import { BadgeTypes } from "../types/entities";

export async function getUserInfo(userId: number) {
  const userInfo = await getUserById(userId);
  if (!userInfo) return null;

  const badges = await getUserBadgesById(userId);

  // TODO: Testar e tratar casos do nível máximo (se eu criar limite)
  // TODO: Rever toda a lógica de progresso de níveis e exibição da barra de progresso.
  const level = calculateLevel(userInfo.points);
  const requiredLevelPoints = pointsRequiredByLevel[level + 1] ?? 0;
  const requiredPointsToNextLevel =
    requiredLevelPoints !== 0 ? requiredLevelPoints - userInfo.points : 0;
  const currentLevelPoints = pointsRequiredByLevel[level];

  const progressPercent =
    requiredLevelPoints > currentLevelPoints
      ? ((userInfo.points - currentLevelPoints) /
          (requiredLevelPoints - currentLevelPoints)) *
        100
      : 100;

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

// Gerar isso depois
const pointsRequiredByLevel: Record<number, number> = {
  1: 0, // Tu começa no nível 1, é oq faz sentido
  2: 400,
  3: 800,
  4: 1000,
  5: 1500,
  6: 2000,
  7: 3000,
};

function calculateLevel(points: number) {
  let currentLevel = 0;

  const levels = Object.keys(pointsRequiredByLevel)
    .map((key) => parseInt(key))
    .sort((a, b) => a - b);

  for (const level of levels) {
    const pointsNeeded = pointsRequiredByLevel[level];
    if (points < pointsNeeded) {
      return currentLevel;
    }
    currentLevel = level;
  }

  return currentLevel;
}

const BADGE_THRESHOLDS = [
  { threshold: 1.0, type: BadgeTypes.GOLD },
  { threshold: 0.85, type: BadgeTypes.SILVER },
  { threshold: 0.7, type: BadgeTypes.BRONZE },
];

function getHighestAchievedBadge(newProgress: number): BadgeTypes | undefined {
  for (const rule of BADGE_THRESHOLDS) {
    if (newProgress >= rule.threshold) {
      return rule.type;
    }
  }
}

export async function grantUserBadges(
  userId: number,
  moduleId: number,
  oldModuleProgress: number,
  newModuleProgress: number,
  dbClient: DrizzleClient
) {
  if (newModuleProgress > oldModuleProgress) {
    const highestAchievedType = getHighestAchievedBadge(newModuleProgress);

    if (highestAchievedType) {
      const currentBadge = await getUserBadgeById(userId, moduleId);

      if (currentBadge) {
        await deleteUserBadge(currentBadge.id);
      }
      await createUserBadge(userId, moduleId, highestAchievedType, dbClient);
    }
  }
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
