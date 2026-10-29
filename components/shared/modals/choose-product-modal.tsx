"use client";

import { cn } from "@/lib/utils";
import { Title } from "../title";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PizzaImage } from "../product-image";
import { Button } from "@/components/ui";
import { GroupVariants, Variant } from "../group-variants";
import { Ingredients, Products, ProductVariants } from "@/lib/db/types";
import Image from "next/image";

interface Product {
  products: Products;
  product_variants: ProductVariants;
}

interface ChooseProductModalProps {
  product: Product[];
  ingredients: Ingredients[];
  className?: string;
}

gsap.registerPlugin(useGSAP);

export function ChooseProductModal({
  product,
  ingredients,
  className,
}: ChooseProductModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickAway(ref, () => router.back());

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-animate="background"]',
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.5, ease: "power1.inOut" },
      );

      gsap.from('[data-animate="modal"]', {
        y: () => window.innerHeight,
        duration: 0.5,
        ease: "none",
      });
    },
    { scope: container },
  );

  const defaultVariant =
    product.find((item) => item.product_variants.isDefault) ?? product[0];
  const sizes: Variant[] = [
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

  return (
    <div ref={container}>
      <div
        data-animate="background"
        className="fixed inset-0 bg-black/50 z-30"
      />

      <div
        data-animate="modal"
        ref={ref}
        className={cn(
          "fixed rounded-3xl w-235 h-150 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
          className,
        )}
      >
        <div
          className={cn(
            "flex justify-center items-center h-full overflow-auto rounded-3xl",
            className,
          )}
        >
          <PizzaImage imageUrl={defaultVariant.products.imageUrl} size={30} />

          <div className="w-115 bg-[#FCFCFC] p-7 h-full">
            <Title
              text={defaultVariant.products.name}
              size="md"
              className="font-extrabold"
            />

            <p className="text-gray-400 mb-1">
              30 см, традиционное тесто 30, 590 г
            </p>

            <p className="font-medium text-sm text-gray-700 mb-4 leading-tight">
              {defaultVariant.products.ingredientsForProduct?.join(", ")}
            </p>

            <div className="flex flex-col gap-2 mb-4">
              <GroupVariants
                items={sizes}
                selectedValue={defaultVariant.product_variants.size}
              />

              {typeof defaultVariant.product_variants.pizzaType ===
                "string" && (
                <GroupVariants
                  items={[
                    { name: "Традиционное", value: 1 },
                    { name: "Тонкое", value: 2 },
                  ]}
                  selectedValue={+defaultVariant.product_variants.pizzaType}
                />
              )}
            </div>

            {defaultVariant.products.allowAdditionalIngredients &&
              ingredients.length > 0 && (
                <div>
                  <Title
                    size="sm"
                    className="font-bold mb-1"
                    text="Добавить по вкусу"
                  />

                  <div className="grid grid-cols-3">
                    {ingredients.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col justify-center items-center rounded-2xl bg-gray-50"
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={88}
                          height={88}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            <Button className="h-13.75 px-10 text-base rounded-[18px] w-full">
              Добавить в корзину за {520}₽
            </Button>
          </div>
        </div>

        <button onClick={() => router.back()}>
          <img
            src="/cross.svg"
            className="absolute top-0.5 -right-17 bg-white transition-all duration-200 rounded-full hover:bg-[#F9FAFB]"
          />
        </button>
      </div>
    </div>
  );
}
