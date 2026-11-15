import { Products } from "../lib/db/types";
import { Routes } from "./routes";

export const search = async (query: string): Promise<Products[]> => {
  const normalizedQuery = query.trim();

  const params = new URLSearchParams({ query: normalizedQuery });

  const response = await fetch(`${Routes.SEARCH_PRODUCTS}?${String(params)}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Не удалось найти товары: ${response.status}`);
  }

  return await response.json();
};
