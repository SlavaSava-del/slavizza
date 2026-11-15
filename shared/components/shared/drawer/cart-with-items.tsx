import { CartItemFull } from "@/shared/db-data/get-cart-items";
import { cn } from "cn";
import { CartItem } from "./cart-item";
import { Button } from "../../ui";
import { Title } from "../title";

interface CartWithItemsProps {
  cartItems: CartItemFull[];
  onQuantityChange: (cartItemId: number, difference: number) => void;
  className?: string;
}

export function CartWithItems({
  onQuantityChange,
  cartItems,
  className,
}: CartWithItemsProps) {
  return (
    <div className={cn("flex flex-col justify-between h-full", className)}>
      <div className="flex flex-col flex-1 gap-3 overflow-y-auto overflow-x-hidden modal-scrollbar">
        <Title text="7 товаров" size="md" className="ml-3 font-bold" />

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            onQuantityChange={onQuantityChange}
            cartItem={item}
          />
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-3xl mt-5">
        <Button className="h-13.75 px-10 font-bold text-lg rounded-[18px] w-full">
          К оформлению заказа
        </Button>
      </div>
    </div>
  );
}
