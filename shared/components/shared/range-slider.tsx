"use client";

import * as React from "react";

import { cn } from "cn";
import { Slider } from "../ui";

interface RangeSliderProps {
  className?: string;
  min: number;
  max: number;
  step: number;
  value?: [number, number];
  onValueChange?: (values: [number, number]) => void;
  formatLabel?: (value: number) => string;
}

export function RangeSlider({
  className,
  min,
  max,
  step,
  value,
  onValueChange,
  formatLabel,
}: RangeSliderProps) {
  const [internalValue, setInternalValue] = React.useState<[number, number]>(
    value ?? [min, max],
  );

  const currentValue = value ?? internalValue;

  React.useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: number | readonly number[]) => {
    if (typeof newValue === "number") {
      return;
    }

    const values = [...newValue];

    if (values.length !== 2) {
      return;
    }

    const nextValue: [number, number] = [values[0], values[1]];

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const getPosition = (currentValue: number) => {
    return ((currentValue - min) / (max - min)) * 100;
  };

  return (
    <div className={cn("relative pb-6", className)}>
      <Slider
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onValueChange={handleValueChange}
        minStepsBetweenValues={1}
      />

      {currentValue.map((currentValue, index) => (
        <span
          key={index}
          className="absolute top-5 -translate-x-1/2 text-sm"
          style={{
            left: `${getPosition(currentValue)}%`,
          }}
        >
          {formatLabel ? formatLabel(currentValue) : currentValue}
        </span>
      ))}
    </div>
  );
}
