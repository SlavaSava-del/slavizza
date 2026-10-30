import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared";
import { db } from "@/shared/lib/db";
import { categories, products, productVariants } from "@/shared/lib/db/schema";
import { count, eq, getColumns, min } from "drizzle-orm";

export default async function Home() {
  const categoriesData = await db.select().from(categories);
  const productsData = await db
    .select({
      ...getColumns(products),
      price: min(productVariants.price),
      count: count(productVariants.price),
    })
    .from(products)
    .innerJoin(productVariants, eq(products.id, productVariants.productId))
    .groupBy(products.id);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categoriesData} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* Фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categoriesData.map((item) => (
                <ProductsGroupList
                  key={item.id}
                  categoryId={item.id}
                  title={item.name}
                  products={productsData.filter(
                    (product) => product.categoryId === item.id,
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
