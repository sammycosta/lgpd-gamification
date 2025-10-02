import { publicProcedure, router } from "@/lib/trpc";
import { getModules } from "@/services/moduleService";
import z from "zod";

export const moduleRouter = router({
  getModules: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => getModules(input.userId)),
});
