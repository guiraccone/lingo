import { cache } from "react";
import db from "./drizzle";
export * from "./schema";


export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
});