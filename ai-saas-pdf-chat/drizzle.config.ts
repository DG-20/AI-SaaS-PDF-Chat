import * as dotenv from 'dotenv';
import { Config } from 'drizzle-kit';
dotenv.config({ path: ".env" })

export default ({
    out: './drizzle',
    schema: './src/lib/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
}) satisfies Config;
