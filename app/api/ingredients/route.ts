import { db } from "@/shared/lib/db";
import { ingredients } from "@/shared/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const ingredientsFromDb = await db.select().from(ingredients);

  return NextResponse.json(ingredientsFromDb);
}
