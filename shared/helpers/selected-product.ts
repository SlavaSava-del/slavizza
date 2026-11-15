import { Product } from "../components/shared/modals/choose-product-modal";

export const getSelectedProduct = (
  product: Product[],
  size: number,
  type: string | null,
): Product => {
  return (
    product.find(
      (item) =>
        item.product_variants.size === size &&
        item.product_variants.pizzaType === type,
    ) ?? product[0]
  );
};
