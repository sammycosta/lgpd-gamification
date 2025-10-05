import { publicProcedure, router } from "@/lib/trpc";
import {
  getActivities,
  submitActivityResult,
} from "@/services/activityService";
import z from "zod";

export const activityRouter = router({
  getActivities: publicProcedure
    .input(z.object({ userId: z.number(), moduleId: z.number() }))
    .query(async ({ input }) => getActivities(input.userId, input.moduleId)),
  submitResult: publicProcedure
    .input(
      z.object({
        userId: z.number().int().positive(),
        activityId: z.number().int().positive(),
        isCorrect: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      await submitActivityResult(
        input.userId,
        input.activityId,
        input.isCorrect
      );

      // Mutators que alteram dados geralmente retornam void ou um status de sucesso
      // TODO: Possivelmente enviar que status mudaram, pois aí faço os avisos na tela!
      return { success: true };
    }),
});
