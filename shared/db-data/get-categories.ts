import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { db } from "../lib/db";
import { categories } from "../lib/db/schema";
import { Categories } from "../lib/db/types";

export const getCategories = async (): Promise<Categories[]> => {
  "use cache";

  cacheLife("days");
  cacheTag("categories");

  const categoriesData = await db.select().from(categories);

  return categoriesData;
};
