import { cn } from "cn";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface AdditionalIngredientProps {
  name: string;
  price: number;
  imageUrl: string;
  active: boolean;
  onClick: () => void;
  className?: string;
}

export function AdditionalIngredient({
  name,
  price,
  imageUrl,
  active,
  onClick,
  className,
}: AdditionalIngredientProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "relative flex flex-col justify-between items-center py-1 rounded-2xl bg-gray-50 gap-1 outline outline-transparent hover:shadow-lg transition-all duration-200",
        active && "outline-primary",
      )}
    >
      {active && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}

      <Image src={imageUrl} alt={name} width={88} height={88} />

      <span className="text-center font-bold text-xs">{name}</span>

      <span className="text-center font-extrabold text-sm">{price}₽</span>
    </button>
  );
}
