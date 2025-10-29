import { protectedProcedure, router } from "@/lib/trpc";
import { getUserInfo } from "@/services/user/userService";

export const userRouter = router({
  getUserInfo: protectedProcedure.query(async ({ ctx }) =>
    getUserInfo(ctx.session.user.id)
  ),
});
