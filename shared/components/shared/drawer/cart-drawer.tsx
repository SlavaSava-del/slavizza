"use client";

import { cn } from "cn";
import { useEffect } from "react";
import { CartEmpty } from "./cart-empty";
import { CartItemFull } from "@/shared/db-data/get-cart-items";
import { CartWithItems } from "./cart-with-items";

interface CartDrawerProps {
  isOpenDrawer: boolean;
  cartItems: CartItemFull[];
  isLoading: boolean;
  onQuantityChange: (cartItemId: number, difference: number) => void;
  setIsOpenDrawer: (value: boolean) => void;
}

export function CartDrawer({
  isOpenDrawer,
  cartItems,
  isLoading,
  onQuantityChange,
  setIsOpenDrawer,
}: CartDrawerProps) {
  useEffect(() => {
    if (!isOpenDrawer) return;

    const mainOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = mainOverflow;
    };
  }, [isOpenDrawer]);

  return (
    <>
      <div
        onClick={() => setIsOpenDrawer(false)}
        className={cn(
          "fixed inset-0 bg-black/50 z-40 opacity-0 transition-opacity duration-500 ease-in-out",
          isOpenDrawer
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-md py-4 pl-4 bg-white transition-transform duration-500 ease-in-out z-40",
          isOpenDrawer ? "translate-x-0" : "translate-x-full",
        )}
      >
        {isLoading ? (
          "Загрузка..."
        ) : !cartItems.length ? (
          <CartEmpty />
        ) : (
          <CartWithItems
            onQuantityChange={onQuantityChange}
            cartItems={cartItems}
          />
        )}

        {isOpenDrawer && (
          <button onClick={() => setIsOpenDrawer(false)}>
            <img
              width={35}
              height={35}
              src="/close-cross.svg"
              className="absolute top-1/2 -left-17 -translate-y-1/2 transition-all duration-400 hover:rotate-180 ease-in-out"
            />
          </button>
        )}
      </div>
    </>
  );
}
