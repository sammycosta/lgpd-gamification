import { protectedProcedure, router } from "@/lib/trpc";
import {
  getActivities,
  submitActivityResult,
} from "@/services/activity/activityService";
import z from "zod";

export const activityRouter = router({
  getActivities: protectedProcedure
    .input(z.object({ moduleId: z.number() }))
    .query(async ({ ctx, input }) =>
      getActivities(ctx.session.user.id, input.moduleId)
    ),
  submitResult: protectedProcedure
    .input(
      z.object({
        activityId: z.number().int().positive(),
        answer: z.unknown(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const isCorrect = await submitActivityResult(
        ctx.session.user.id,
        input.activityId,
        input.answer
      );

      // Mutators que alteram dados geralmente retornam void ou um status de sucesso
      // TODO: Possivelmente enviar que status mudaram, pois aí faço os avisos na tela!
      return { success: true, isCorrect };
    }),
});
