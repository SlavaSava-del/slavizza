import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const mainIngredients = await db
    .select({ ingredients: products.ingredientsForProduct })
    .from(products);

  const set = new Set<string>();

  mainIngredients.forEach((ingredientsProduct) =>
    ingredientsProduct.ingredients?.forEach((ingredient) =>
      set.add(ingredient[0].toUpperCase() + ingredient.slice(1).toLowerCase()),
    ),
  );

  const result = Array.from(set, (text, i) => ({
    text,
    value: String(i + 1),
  }));

  return NextResponse.json(result);
}
