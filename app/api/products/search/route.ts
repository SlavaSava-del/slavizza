import { db } from "@/shared/lib/db";
import { products } from "@/shared/lib/db/schema";
import { ilike } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  const productsFromDb = await db
    .select()
    .from(products)
    .where(ilike(products.name, `%${query}%`))
    .limit(5);

  return NextResponse.json(productsFromDb);
}
