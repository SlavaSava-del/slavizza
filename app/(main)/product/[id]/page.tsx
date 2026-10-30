import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { db } from "@/shared/lib/db";
import { products, productVariants } from "@/shared/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await db
    .select()
    .from(products)
    .innerJoin(productVariants, eq(products.id, productVariants.productId))
    .where(eq(products.id, Number(id)));

  if (!product.length) {
    return notFound();
  }

  return (
    <Container className="flex flex-1 my-10">
      <PizzaImage imageUrl={product[3].product_variants.imageUrl} size={30} />

      <div className="w-122.5 bg-[#FCFCFC] p-7">
        <Title
          text={product[0].products.name}
          size="md"
          className="font-extrabold mb-1"
        />

        <p className="text-gray-400">
          {product[0].products.ingredientsForProduct?.join(", ")}
        </p>

        <GroupVariants
          selectedValue={30}
          items={[
            { name: "20 см", value: 20, disabled: true },
            { name: "25 см", value: 25 },
            { name: "30 см", value: 30 },
            { name: "35 см", value: 35 },
          ]}
        />
      </div>
    </Container>
  );
}
