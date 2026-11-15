import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { db } from "../lib/db";
import { products, productVariants } from "../lib/db/schema";
import { count, eq, getColumns, min } from "drizzle-orm";
import { ProductsForCard } from "../components/shared/products-group-list";

export const getProducts = async (): Promise<ProductsForCard[]> => {
  "use cache";

  cacheLife("hours");
  cacheTag("products");

  const productsData = await db
    .select({
      ...getColumns(products),
      price: min(productVariants.price),
      count: count(productVariants.price),
    })
    .from(products)
    .innerJoin(productVariants, eq(products.id, productVariants.productId))
    .groupBy(products.id);

  return productsData;
};
