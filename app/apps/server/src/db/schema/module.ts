import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const modules = sqliteTable("modules", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  maxPoints: integer("max_points").notNull(),
  // Como fazer auto-referencia?
  // requiredModule: integer("required_module").references(() => modules.id),
});

export const activityTypes = sqliteTable("activity_types", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// Base que pode ser herdada para tipos diferentes
export const activities = sqliteTable(
  "activities",
  {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    moduleId: integer("module_id")
      .references(() => modules.id)
      .notNull(),
    typeId: integer("type_id").references(() => activityTypes.id),
    points: integer("points").notNull().default(10),
  },
  (table) => [
    index("activities_module_id_idx").on(table.moduleId),
    index("activities_type_id_idx").on(table.typeId),
  ]
);

export const qnaDetails = sqliteTable(
  "qna_details",
  {
    activityId: integer("activity_id")
      .references(() => activities.id)
      .primaryKey(), // Garante herança 1:1
    question: text("question").notNull(),
    isMultiple: integer("is_multiple", { mode: "boolean" })
      .notNull()
      .default(false),
  },
  (table) => [index("qna_details_activity_id_idx").on(table.activityId)]
);

export const qnaOptions = sqliteTable(
  "qna_options",
  {
    id: integer("id").primaryKey(),
    activityId: integer("activity_id")
      .references(() => qnaDetails.activityId)
      .notNull(),
    text: text("text").notNull(),
    isCorrect: integer("is_correct", { mode: "boolean" })
      .notNull()
      .default(false),
  },
  (table) => [index("qna_options_activity_id_index").on(table.activityId)]
);
