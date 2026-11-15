import { cn } from "cn";
import { Title } from "../title";

interface CartEmptyProps {
  className?: string;
}

export function CartEmpty({ className }: CartEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center h-full",
        className,
      )}
    >
      <img src="/clear-cart.webp" alt="Пустая корзина" />

      <Title
        text="Ваша корзина пуста"
        size="md"
        className="font-extrabold text-olive-600"
      />

      <p className="font-extrabold text-lg text-olive-500">
        Добавьте пиццу. Или две!
      </p>
    </div>
  );
}
