"use client";

import { cn } from "@/lib/utils";

export type Variant = {
  name: string;
  value: number;
  disabled?: boolean;
};

interface GroupVariantsProps {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: number;
  className?: string;
}

export function GroupVariants({
  items,
  onClick,
  selectedValue,
  className,
}: GroupVariantsProps) {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#F3F3F3] rounded-3xl p-1 select-none",
        className,
      )}
    >
      {items.map((item) => (
        <button
          key={item.value}
          className={cn(
            "flex justify-center items-center font-semibold h-7.5 px-5 flex-1 rounded-3xl transition-all duration-300 text-sm",
            {
              "bg-white shadow": item.value === selectedValue,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            },
          )}
          onClick={() => onClick?.(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
