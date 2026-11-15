import "server-only";
import { db } from "../lib/db";

export const getCartItems = async () => {
  return db.query.cartItem.findMany({
    with: {
      productVariant: {
        with: {
          product: true,
        },
      },

      ingredients: true,
    },
  });
};

export type CartItemsResult = Awaited<ReturnType<typeof getCartItems>>;
export type CartItemFull = CartItemsResult[number];
