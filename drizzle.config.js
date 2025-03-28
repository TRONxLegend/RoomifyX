import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_9sUGuOH2lDfv@ep-odd-art-a5oosuwf-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
