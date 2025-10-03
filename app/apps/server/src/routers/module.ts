import { publicProcedure, router } from "@/lib/trpc";
import { getModule, getModules } from "@/services/moduleService";
import z from "zod";

export const moduleRouter = router({
  getModules: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => getModules(input.userId)),
  getModule: publicProcedure
    .input(z.object({ userId: z.number(), moduleId: z.number() }))
    .query(async ({ input }) => getModule(input.userId, input.moduleId)),
});
