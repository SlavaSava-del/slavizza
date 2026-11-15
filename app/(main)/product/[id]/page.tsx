import {
  HomeContent,
  ProductModalContent,
  ProductModalShell,
} from "@/shared/components/shared";
import { ProductModalSkeleton } from "@/shared/components/skeletons";
import { getProductVariantsAndDefault } from "@/shared/db-data";
import { Metadata } from "next";
import { Suspense } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  "use cache";

  const { id } = await params;

  const { defaultVariantProduct } = await getProductVariantsAndDefault(id);

  return {
    title: defaultVariantProduct.product_variants.pizzaType
      ? `Пицца ${defaultVariantProduct.products.name}`
      : defaultVariantProduct.products.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <ProductModalShell>
      <Suspense fallback={<ProductModalSkeleton />}>
        <ProductModalContent params={params} />
      </Suspense>
    </ProductModalShell>
  );
}
