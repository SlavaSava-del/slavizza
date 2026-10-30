import { Product } from "../components/shared/modals/choose-product-modal";

export const useGetDefaultVariantProduct = (product: Product[]): Product => {
  const defaultVariantProduct =
    product.find((item) => item.product_variants.isDefault) ?? product[0];

  return defaultVariantProduct;
};
