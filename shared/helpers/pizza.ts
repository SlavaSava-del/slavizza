import { Variant } from "../components/shared/group-variants";
import { Product } from "../components/shared/modals/choose-product-modal";

export function sizesProduct(product: Product[]): Variant[] {
  return [
    ...new Map(
      product.map((item) => [
        item.product_variants.size,
        {
          name: item.product_variants.size + item.product_variants.sizeUnit,
          value: item.product_variants.size,
        },
      ]),
    ).values(),
  ];
}
