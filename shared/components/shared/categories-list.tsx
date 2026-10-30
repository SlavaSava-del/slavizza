"use client";

import { Categories } from "@/shared/lib/db/types";
import { useGetActiveId } from "@/shared/store/category";
import { cn } from "cn";

interface CategoriesListProps {
  categories: Categories[];
  className?: string;
}

export function CategoriesList({ className, categories }: CategoriesListProps) {
  const activeCategoryId = useGetActiveId();

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ name, id }) => (
        <a
          key={id}
          href={`/#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeCategoryId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
}
