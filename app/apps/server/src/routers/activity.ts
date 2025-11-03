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
      const info = await submitActivityResult(
        ctx.session.user.id,
        input.activityId,
        input.answer
      );

      return { success: true, ...info };
    }),
});
