"use client";

import { CartItemFull } from "@/shared/db-data/get-cart-items";
import { cn } from "cn";
import Image from "next/image";
import { Title } from "../title";
import { getPizzaTypeDescriptionAndProductCharacters } from "@/shared/helpers";
import { CartCounterProduct } from "./cart-counter-product";

interface CartItemProps {
  cartItem: CartItemFull;
  onQuantityChange: (cartItemId: number, difference: number) => void;
  className?: string;
}

export function CartItem({
  cartItem,
  onQuantityChange,
  className,
}: CartItemProps) {
  const productCharacters = getPizzaTypeDescriptionAndProductCharacters(
    cartItem.productVariant,
  );

  return (
    <div
      className={cn(
        "flex flex-col bg-gray-50 rounded-2xl py-4 px-6 w-full",
        className,
      )}
    >
      <div className="relative flex items-start justify-start gap-3 pb-2 mb-2 border-b border-b-gray-200">
        <Image
          width={70}
          height={70}
          src={cartItem.productVariant.imageUrl}
          alt={cartItem.productVariant.product.name}
        />

        <div className="flex flex-col">
          <Title
            className="font-bold"
            size="base"
            text={cartItem.productVariant.product.name}
          />

          <p className="text-gray-400 text-sm font-medium">
            {productCharacters}
          </p>
        </div>

        <button className="absolute top-1 right-1">
          <img width={17} height={17} src="/cross.svg" alt="Убрать товар" />
        </button>
      </div>

      <div className="flex justify-between">
        <p className="font-bold text-lg">{cartItem.productVariant.price} ₽</p>

        <CartCounterProduct
          quantity={cartItem.quantity}
          onIncrease={() => onQuantityChange(cartItem.id, 1)}
          onDecrease={() => onQuantityChange(cartItem.id, -1)}
        />
      </div>
    </div>
  );
}
