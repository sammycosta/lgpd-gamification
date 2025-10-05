import { BadgeTypes } from "@/types/entities";
import {
  index,
  integer,
  sqliteTable,
  text,
  unique,
} from "drizzle-orm/sqlite-core";
import { modules } from "./module";

export const avatars = sqliteTable("avatars", {
  id: integer("id").primaryKey(),
  filePath: text("file_path").notNull(), // ex: avatars/avatar_1.svg
});

export const titles = sqliteTable("titles", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    points: integer("points").default(0).notNull(),
    avatarId: integer("avatar_id")
      .references(() => avatars.id)
      .notNull(),
    titleId: integer("title_id")
      .references(() => titles.id)
      .notNull(),
  },
  (table) => [
    index("users_avatar_id_idx").on(table.avatarId),
    index("users_title_id_idx").on(table.titleId),
  ]
);

export const badgeTypes = sqliteTable("badge_types", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
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
      .notNull(),
    typeId: integer("type_id")
      .$type<BadgeTypes>()
      .references(() => badgeTypes.id)
      .notNull(),
  },
  (table) => [
    unique("user_badges_user_id_module_id_uk").on(table.userId, table.moduleId),
    index("user_badges_user_id_idx").on(table.userId),
    index("user_badges_module_id_idx").on(table.moduleId),
    index("user_badges_type_id_idx").on(table.typeId),
  ]
);
