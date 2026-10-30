"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const useFilters = () => {
  const searchParams = useSearchParams();

  const [sliderValue, setSliderValue] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || 0,
    priceTo: Number(searchParams.get("priceTo")) || 1000,
  });

  const [selectedFeatures, { toggle: onAddFeature }] = useSet(
    new Set<string>(
      searchParams.has("selectedFeatures")
        ? searchParams.get("selectedFeatures")?.split(",")
        : [],
    ),
  );

  const [selectedIngredients, { toggle: onAddId }] = useSet(
    new Set<string>(
      searchParams.has("selectedIngredients")
        ? searchParams.get("selectedIngredients")?.split(",")
        : [],
    ),
  );

  return {
    sliderValue,
    setSliderValue,
    selectedFeatures,
    onAddFeature,
    selectedIngredients,
    onAddId,
  };
};
