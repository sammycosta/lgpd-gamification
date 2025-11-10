import z from "zod";
import { protectedProcedure, router } from "../lib/trpc";
import { getAvatars } from "../repositories/user";
import { getUserInfo, updateUserAvatar } from "../services/user/userService";

export const userRouter = router({
  getUserInfo: protectedProcedure.query(async ({ ctx }) =>
    getUserInfo(ctx.session.user.id)
  ),
  getAvatars: protectedProcedure.query(async ({ ctx }) => getAvatars()),
  updateAvatar: protectedProcedure
    .input(z.object({ avatarId: z.number() }))
    .mutation(async ({ ctx, input }) =>
      updateUserAvatar(ctx.session.user.id, input.avatarId)
    ),
});
