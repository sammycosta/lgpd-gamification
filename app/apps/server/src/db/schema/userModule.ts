import { index, integer, sqliteTable, unique } from "drizzle-orm/sqlite-core";
import { activities, modules } from "./module";
import { users } from "./user";

// Entidade só é criada quando módulo é desbloqueado.
export const userModules = sqliteTable(
  "user_modules",
  {
    id: integer("id").primaryKey(),
    userId: integer("user_id")
      .references(() => users.id)
      .notNull(),
    moduleId: integer("module_id")
      .references(() => modules.id)
      .notNull(),
    points: integer("points").notNull().default(0),
  },
  (table) => [
    unique("user_modules_user_id_module_id_uk").on(
      table.userId,
      table.moduleId
    ),
    index("user_modules_user_id_idx").on(table.userId),
    index("user_modules_module_id_idx").on(table.moduleId),
  ]
);

// Entidade só é criada quando a atividade é respondida.
export const userActivities = sqliteTable(
  "user_activities",
  {
    id: integer("id").primaryKey(),
    userId: integer("user_id")
      .references(() => users.id)
      .notNull(),
    activityId: integer("activity_id")
      .references(() => activities.id)
      .notNull(),
    isCorrect: integer("is_correct", { mode: "boolean" }).notNull(),
  },
  (table) => [
    unique("user_activities_user_id_activity_id").on(
      table.userId,
      table.activityId
    ),
    index("user_activities_user_id_idx").on(table.userId),
    index("user_activities_activity_id_idx").on(table.activityId),
  ]
);
