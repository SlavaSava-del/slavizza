"use client";

import { Title } from "./title";
import { Input, Slider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFilters, useGetIngredients } from "@/shared/hooks";
import { cn } from "cn";

interface FiltersProps {
  className?: string;
}

export function Filters({ className }: FiltersProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { ingredients, isLoading } = useGetIngredients();
  const {
    sliderValue,
    setSliderValue,
    selectedFeatures,
    onAddFeature,
    selectedIngredients,
    onAddId,
  } = useFilters();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();

      sliderValue.priceFrom !== 0 &&
        params.set("priceFrom", String(sliderValue.priceFrom));

      sliderValue.priceTo !== 1000 &&
        params.set("priceTo", String(sliderValue.priceTo));

      selectedFeatures.size > 0 &&
        params.set("selectedFeatures", [...selectedFeatures].join(","));

      selectedIngredients.size > 0 &&
        params.set("selectedIngredients", [...selectedIngredients].join(","));

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedIngredients, selectedFeatures, sliderValue]);

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Особенности"
        className="mt-5"
        items={[
          { text: "Новинки", value: "new" },
          { text: "Суперцена", value: "superPrice" },
        ]}
        onClickCheckBox={onAddFeature}
        selectedValues={selectedFeatures}
        name="features"
      />

      {/* Фильтры цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={sliderValue.priceFrom}
            onChange={(e) =>
              setSliderValue((prev) => ({
                ...prev,
                priceFrom: +e.target.value,
              }))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={sliderValue.priceTo}
            onChange={(e) =>
              setSliderValue((prev) => ({
                ...prev,
                priceTo: +e.target.value,
              }))
            }
          />
        </div>

        <Slider
          value={[sliderValue.priceFrom, sliderValue.priceTo]}
          min={0}
          max={1000}
          step={10}
          onValueChange={(value) => {
            if (typeof value === "number") return;

            setSliderValue((prev) => ({
              ...prev,
              priceFrom: value[0],
              priceTo: value[1],
            }));
          }}
          className="mx-auto w-full max-w-xs"
        />
      </div>

      {/* Нижние чекбоксы */}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        loading={isLoading}
        defaultItems={ingredients.slice(0, 6)}
        items={ingredients}
        onClickCheckBox={onAddId}
        selectedValues={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
}
