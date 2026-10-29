"use client";

import { Api } from "@/services/api-client";
import { MainIngredients } from "@/services/main-ingredients";
import { useEffect, useState } from "react";

export const useGetIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<MainIngredients[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setIsLoading(true);
        const data = await Api.mainIngredients.getAll();
        setIngredients(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, isLoading };
};
