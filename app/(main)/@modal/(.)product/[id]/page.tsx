import { ChooseProductModal } from "@/shared/components/shared";
import { db } from "@/shared/lib/db";
import { ingredients, products, productVariants } from "@/shared/lib/db/schema";
import { Ingredients } from "@/shared/lib/db/types";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductModalPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await db
    .select()
    .from(products)
    .innerJoin(productVariants, eq(products.id, productVariants.productId))
    .where(eq(products.id, Number(id)));

  const ingredientsData: Ingredients[] = [];

  if (product[0].products.allowAdditionalIngredients) {
    const array = await db.select().from(ingredients);
    ingredientsData.push(...array);
  }

  if (!product.length) {
    return notFound();
  }

  return <ChooseProductModal product={product} ingredients={ingredientsData} />;
}
