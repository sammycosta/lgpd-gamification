import { integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";
import { modules } from "./module";

// Dúvida futura: os ids primary sao incrementais?

export const avatars = sqliteTable("avatars", {
  id: integer("id").primaryKey(),
  filePath: text("file_path").notNull(), // ex: avatars/avatar_1.svg
});

export const titles = sqliteTable("titles", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  points: integer("points").default(0).notNull(),
  avatarId: integer("avatar_id")
    .references(() => avatars.id)
    .notNull(), // Colocar um default depois.
  titleId: integer("title_id")
    .references(() => titles.id)
    .notNull(), // Colocar um default depois.
});

export const badgeTypes = sqliteTable("badge_types", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(), // ex: "bronze", "silver", "gold"
});

export const userBadges = sqliteTable(
  "user_badges",
  {
    id: integer("id").primaryKey(),
    userId: integer("user_id")
      .references(() => users.id)
      .notNull(),
    moduleId: integer("module_id")
      .references(() => modules.id)
      .notNull(), //Referenciar assim que criar entidade
    typeId: integer("type_id")
      .references(() => badgeTypes.id)
      .notNull(),
  },
  (table) => [unique("unique_user_module").on(table.userId, table.moduleId)]
);
