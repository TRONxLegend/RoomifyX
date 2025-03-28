import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    name:varchar('email').notNull(),
})