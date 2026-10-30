import { drizzle } from "drizzle-orm/node-postgres";
import { reset } from "drizzle-seed";
import * as schema from "./schema";
import { Pool } from "pg";
import { loadEnvConfig } from "@next/env";
import {
  categoriesData,
  ingredientsData,
  productsData,
  productVariantsData,
} from "./constants";
import { sql } from "drizzle-orm";

loadEnvConfig(process.cwd());

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
  });

  const db = drizzle({ client: pool });

  await reset(db, schema);

  await db.execute(
    sql`TRUNCATE TABLE categories, ingredients, products, product_variants RESTART IDENTITY CASCADE`,
  );

  await db.insert(schema.ingredients).values(ingredientsData);
  await db.insert(schema.categories).values(categoriesData);
  await db.insert(schema.products).values(productsData);
  await db.insert(schema.productVariants).values(productVariantsData);

  await pool.end();
}

main().catch((e) => {
  console.log("Ошибка при заполнении БД - " + e);
});
