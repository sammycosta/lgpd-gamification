import { index, integer, sqliteTable, unique } from "drizzle-orm/sqlite-core";
import { activities, modules } from "./module";
import { users } from "./user";

// Depois: entender se todos os user vão ter conexoes com todos os modules de primeira ou só quando forem progredindo.
export const userModules = sqliteTable(
  "user_modules",
  {
    id: integer("id").primaryKey(),
    userId: integer("user_id").references(() => users.id),
    moduleId: integer("module_id").references(() => modules.id),
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

// Vou calcular "locked" dinamicamente no back, daí depois posso ver se faz sentido ser salvo no banco.

export const userActivities = sqliteTable(
  "user_activities",
  {
    id: integer("id").primaryKey(),
    userId: integer("user_id").references(() => users.id),
    activityId: integer("activity_id").references(() => activities.id),
    isCorrect: integer("is_correct", { mode: "boolean" }), // Se for vazio, atividade ainda não foi feita
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
