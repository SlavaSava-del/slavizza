import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared";
import { getCategories, getProducts } from "@/shared/db-data";
import { FiltersSkeleton } from "../skeletons";
import { Suspense } from "react";

export async function HomeContent() {
  const [productsData, categoriesData] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categoriesData} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          <div className="w-62.5">
            <Suspense fallback={<FiltersSkeleton />}>
              <Filters />
            </Suspense>
          </div>

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
