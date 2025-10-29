import { router } from "../lib/trpc";
import { activityRouter } from "./activity";
import { moduleRouter } from "./module";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
  module: moduleRouter,
  activity: activityRouter,
});

export type AppRouter = typeof appRouter;
