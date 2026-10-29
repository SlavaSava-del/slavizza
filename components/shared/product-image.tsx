import { cn } from "@/lib/utils";

interface PizzaImageProps {
  imageUrl: string;
  size: 20 | 25 | 30 | 35;
  className?: string;
}

export function PizzaImage({ className, imageUrl, size }: PizzaImageProps) {
  return (
    <div
      className={cn(
        "flex justify-center items-center relative w-full flex-1",
        className,
      )}
    >
      <img
        src={imageUrl}
        alt="pizza"
        className={cn(
          "relative left-2 top-2 transition-all duration-300 z-10",
          {
            "w-75 h-75": size === 20,
            "w-87.5 h-87.5": size === 25,
            "w-100 h-100": size === 30,
            "w-112.5 h-112.5": size === 35,
          },
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-87.5 h-87.5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-100 h-100" />
    </div>
  );
}
