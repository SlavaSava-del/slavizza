"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSet } from "react-use";
import { Product } from "../components/shared/modals/choose-product-modal";

export function useModal(defaultVariant: Product) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [size, setSize] = useState(
    Number(searchParams.get("size")) || defaultVariant.product_variants.size,
  );
  const [type, setType] = useState(
    searchParams.get("type") || defaultVariant.product_variants.pizzaType,
  );

  const [selectedIngredients, { toggle: onAddIngredient }] = useSet(
    new Set<number>(
      searchParams.has("ingredients")
        ? searchParams.get("ingredients")?.split(",").map(Number)
        : [],
    ),
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (size !== defaultVariant.product_variants.size) {
      params.set("size", String(size));
    } else {
      params.delete("size");
    }

    if (
      type !== null &&
      (size !== defaultVariant.product_variants.size ||
        type !== defaultVariant.product_variants.pizzaType)
    ) {
      params.set("type", type);
    } else {
      params.delete("type");
    }

    if (selectedIngredients.size > 0) {
      params.set("ingredients", [...selectedIngredients].join(","));
    } else {
      params.delete("ingredients");
    }

    const newQuery = params.toString();
    const currentQuery = searchParams.toString();

    if (newQuery !== currentQuery) {
      router.replace(newQuery ? `${pathname}?${newQuery}` : pathname, {
        scroll: false,
      });
    }
  }, [size, type, selectedIngredients, searchParams, router, pathname]);

  return {
    size,
    setSize,
    type,
    setType,
    selectedIngredients,
    onAddIngredient,
  };
}
