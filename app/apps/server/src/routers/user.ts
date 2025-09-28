import { db } from "@/db";
import { avatars, badgeTypes, titles, userBadges, users } from "@/db/schema";
import { publicProcedure, router } from "@/lib/trpc";
import { eq } from "drizzle-orm";
import z from "zod";

// Fazer tudo aqui e futuramente separar, dependendo da arquitetura.

export const userRouter = router({
  getUserInfo: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      const userInfo = await db
        .select({
          name: users.name,
          points: users.points,
          title: titles.name,
          avatarPath: avatars.filePath,
        })
        .from(users)
        .innerJoin(avatars, eq(users.avatarId, avatars.id))
        .innerJoin(titles, eq(users.titleId, titles.id))
        .where(eq(users.id, input.userId))
        .get();

      if (!userInfo) return null;

      const badges = await db
        .select({
          moduleId: userBadges.moduleId,
          type: badgeTypes.name,
        })
        .from(userBadges)
        .innerJoin(badgeTypes, eq(userBadges.typeId, badgeTypes.id))
        .where(eq(userBadges.userId, input.userId))
        .all();

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
    }),
});

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
