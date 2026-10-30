"use client";

import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { useState } from "react";
import { CheckboxFiltersSkeleton } from "../skeletons";
import { cn } from "cn";

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckBox?: (key: string) => void;
  defaultValue?: string[];
  className?: string;
  selectedValues: Set<string>;
  name?: string;
}

export function CheckboxFiltersGroup({
  className,
  title,
  items,
  defaultItems,
  defaultValue,
  limit = 5,
  name,
  loading = false,
  selectedValues,
  searchInputPlaceholder = "Поиск...",
  onClickCheckBox,
}: CheckboxFiltersGroupProps) {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  if (loading)
    return (
      <CheckboxFiltersSkeleton
        title={title}
        limit={limit}
        className={className}
      />
    );

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}

      <div
        className={cn(
          "flex flex-col gap-4",
          showAll && "max-h-96 pr-2 overflow-auto scrollbar",
        )}
      >
        {list.map((item, i) => (
          <FilterCheckbox
            key={i}
            value={item.value}
            text={item.text}
            checked={selectedValues.has(item.value)}
            onCheckedChange={() => onClickCheckBox?.(item.value)}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-neutral-100 mt-3" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-4"
          >
            {showAll ? "Скрыть" : "+ Показать всё"}
          </button>
        </div>
      )}
    </div>
  );
}
