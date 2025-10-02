import { publicProcedure, router } from "../lib/trpc";
import { moduleRouter } from "./module";
import { userRouter } from "./user";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  user: userRouter,
  module: moduleRouter,
});

export type AppRouter = typeof appRouter;
