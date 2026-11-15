"use client";

import { cn } from "cn";
import { Button } from "../../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "./cart-drawer";
import { CartItemFull } from "@/shared/db-data/get-cart-items";

interface CartButtonProps {
  className?: string;
}

export function CartButton({ className }: CartButtonProps) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemFull[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function handleOpenDrawer() {
    setIsOpenDrawer(true);

    if (isLoaded || isLoading) return;

    try {
      setIsLoading(true);

      const response = await fetch("/api/cart", { cache: "no-cache" });

      if (!response.ok) throw new Error("Не удалось загрузить корзину");

      const cartItems = await response.json();

      setCartItems(cartItems);
      setIsLoaded(true);
    } finally {
      setIsLoading(false);
    }
  }

  function changeQuantity(cartItemId: number, difference: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (cartItemId !== item.id) {
          return item;
        }

        const nextQuantity = item.quantity + difference;

        return { ...item, quantity: Math.max(1, nextQuantity) };
      }),
    );
  }

  return (
    <>
      <Button
        onClick={() => handleOpenDrawer()}
        className={cn("group relative", className)}
      >
        <b>520 ₽</b>
        <span className="h-full w-px bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>

      <CartDrawer
        isOpenDrawer={isOpenDrawer}
        cartItems={cartItems}
        isLoading={isLoading}
        onQuantityChange={changeQuantity}
        setIsOpenDrawer={setIsOpenDrawer}
      />
    </>
  );
}
