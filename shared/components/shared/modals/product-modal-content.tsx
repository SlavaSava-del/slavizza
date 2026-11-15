import { ChooseProductModal } from "@/shared/components/shared";
import { getIngredients, getProductVariantsAndDefault } from "@/shared/db-data";

interface ProductContentProps {
  params: Promise<{ id: string }>;
}

export async function ProductModalContent({ params }: ProductContentProps) {
  const { id } = await params;

  const [{ product, defaultVariantProduct }, ingredients] = await Promise.all([
    getProductVariantsAndDefault(id),
    getIngredients(),
  ]);

  return (
    <ChooseProductModal
      product={product}
      ingredients={ingredients}
      defaultVariant={defaultVariantProduct}
    />
  );
}
