import { Routes } from "./routes";

export interface MainIngredients {
  text: string;
  value: string;
}

export const getAll = async (): Promise<MainIngredients[]> => {
  const response = await fetch(Routes.MAIN_INGREDIENTS, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error(
      `Не удалось получить главные ингредиенты: ${response.status}`,
    );
  }

  return await response.json();
};
