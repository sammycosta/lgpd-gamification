import { publicProcedure, router } from "@/lib/trpc";
import { getUserInfo } from "@/services/user/userService";
import z from "zod";

export const userRouter = router({
  getUserInfo: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => getUserInfo(input.userId)),
});
