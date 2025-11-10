// LEVEL

import { BadgeTypes } from "@/types/entities";

// Segue lógica de progressão quadrática aproximada.
export const pointsRequiredByLevel: Record<number, number> = {
  0: 0,
  1: 10,
  2: 40,
  3: 95,
  4: 165,
  5: 260,
  6: 370,
  7: 500,
  8: 660,
  9: 835,
  10: 1030,
};

export function calculateLevel(points: number) {
  let currentLevel = 0;
  const levels = Object.keys(pointsRequiredByLevel)
    .map(Number)
    .sort((a, b) => a - b);

  for (const level of levels) {
    if (points < pointsRequiredByLevel[level]) return currentLevel;
    currentLevel = level;
  }
  return currentLevel;
}

export function calculateProgressPercent(points: number) {
  const level = calculateLevel(points);
  const currentLevelPoints = pointsRequiredByLevel[level];
  const nextLevelPoints =
    pointsRequiredByLevel[level + 1] ?? currentLevelPoints;

  return nextLevelPoints > currentLevelPoints
    ? ((points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) *
        100
    : 100;
}

// BADGES

export const BADGE_THRESHOLDS = [
  { threshold: 1.0, type: BadgeTypes.GOLD },
  { threshold: 0.85, type: BadgeTypes.SILVER },
  { threshold: 0.7, type: BadgeTypes.BRONZE },
];

export function getHighestAchievedBadge(
  progress: number
): BadgeTypes | undefined {
  for (const rule of BADGE_THRESHOLDS) {
    if (progress >= rule.threshold) return rule.type;
  }
}
