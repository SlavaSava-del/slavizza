"use client";

import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useEffect, useRef } from "react";
import { setActiveCategoryId } from "@/store/category";
import { Products } from "@/lib/db/types";

export type ProductsForCard = Products & {
  price: number | null;
  count: number;
};

interface ProductsGroupListProps {
  title: string;
  products: ProductsForCard[];
  categoryId: number;
  listClassname?: string;
  className?: string;
}

export function ProductsGroupList({
  title,
  products,
  categoryId,
  className,
  listClassname,
}: ProductsGroupListProps) {
  const intersectionRef = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={cn("", className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-12.5", listClassname)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price || 0}
            count={product.count}
            ingredientsForProduct={product.ingredientsForProduct}
            description={product.description}
            isNew={product.isNew}
            isHit={product.isHit}
            isSuperPrice={product.isSuperPrice}
          />
        ))}
      </div>
    </div>
  );
}
