import "server-only";

import { eq } from "drizzle-orm";
import { Product } from "../components/shared/modals/choose-product-modal";
import { db } from "../lib/db";
import { products, productVariants } from "../lib/db/schema";
import { cacheLife, cacheTag } from "next/cache";

export const getProductVariantsAndDefault = async (
  id: string,
): Promise<{ product: Product[]; defaultVariantProduct: Product }> => {
  "use cache";

  cacheLife("minutes");
  cacheTag(`product-modal-${id}`);

  const product = await db
    .select()
    .from(products)
    .innerJoin(productVariants, eq(products.id, productVariants.productId))
    .where(eq(products.id, Number(id)));

  const defaultVariantProduct =
    product.find((item) => item.product_variants.isDefault) ?? product[0];

  return { product, defaultVariantProduct };
};
