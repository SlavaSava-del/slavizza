"use client";

import { cn } from "cn";

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
  const selectedIndex = items.findIndex((item) => item.value === selectedValue);

  return (
    <div
      className={cn("flex bg-[#F3F3F3] rounded-3xl p-1 select-none", className)}
    >
      <div className="relative flex w-full">
        {selectedIndex !== -1 && (
          <div
            className={cn(
              "absolute inset-y-0 left-0 rounded-3xl bg-white shadow transition-transform duration-300 ease-in-out z-10",
              items.length < 2 && "bg-transparent shadow-none",
            )}
            style={{
              width: `${100 / items.length}%`,
              transform: `translateX(${selectedIndex * 100}%)`,
            }}
          />
        )}

        {items.map((item) => (
          <button
            key={item.value}
            type="button"
            disabled={item.disabled}
            className={cn(
              "flex justify-center items-center font-semibold h-7.5 px-5 flex-1 rounded-3xl transition-colors duration-300 text-sm z-20",
              {
                "text-gray-500 opacity-50 pointer-events-none": item.disabled,
              },
            )}
            onClick={() => onClick?.(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
