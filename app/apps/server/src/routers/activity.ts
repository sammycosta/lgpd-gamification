import { publicProcedure, router } from "@/lib/trpc";
import { getActivities } from "@/services/activityService";
import z from "zod";

export const activityRouter = router({
  getActivities: publicProcedure
    .input(z.object({ userId: z.number(), moduleId: z.number() }))
    .query(async ({ input }) => getActivities(input.userId, input.moduleId)),
});
