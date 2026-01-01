import { neon } from "@neondatabase/serverless"
import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/flag_spain.png"
            },
            {
                id: 2,
                title: "English",
                imageSrc: "/flag_uk.png"
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/flag_france.png"
            }
        ])

        console.log("Seeding finished")
    }

    catch (error) {
        console.error(error)
        throw new Error("Failed to seed the database.")
    }
}

main();