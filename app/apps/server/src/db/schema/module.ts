import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const modules = sqliteTable("modules", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// DEPOIS! Vamos puxar primeiro informações do usuário
