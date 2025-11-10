import z from "zod";
import { protectedProcedure, router } from "../lib/trpc";
import { getModule, getModules } from "../services/module/moduleService";

export const moduleRouter = router({
  getModules: protectedProcedure.query(async ({ ctx }) =>
    getModules(ctx.session.user.id)
  ),
  getModule: protectedProcedure
    .input(z.object({ moduleId: z.number() }))
    .query(async ({ ctx, input }) =>
      getModule(ctx.session.user.id, input.moduleId)
    ),
});
