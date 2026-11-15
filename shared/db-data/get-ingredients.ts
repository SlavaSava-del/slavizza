import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { db } from "../lib/db";
import { ingredients } from "../lib/db/schema";
import { Ingredients } from "../lib/db/types";

export const getIngredients = async (): Promise<Ingredients[]> => {
  "use cache";

  cacheLife("hours");
  cacheTag("additional-ingredients");

  const ingredientsData = await db.select().from(ingredients);

  return ingredientsData;
};
