import { getCartItems } from "@/shared/db-data";
import { NextResponse } from "next/server";

export async function GET() {
  const items = await getCartItems();

  return NextResponse.json(items);
}
