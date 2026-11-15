import { ProductVariants } from "../lib/db/types";

export function getPizzaTypeDescriptionAndProductCharacters(
  item: ProductVariants,
) {
  const pizzaTypeDescription =
    item.pizzaType === "1"
      ? "традиционное тесто,"
      : item.pizzaType === "2"
        ? "тонкое тесто,"
        : "";

  const productCharacters = `${item.size} ${item.sizeUnit}, ${pizzaTypeDescription} ${item.weight} г`;

  return productCharacters;
}
