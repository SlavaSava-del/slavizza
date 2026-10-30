"use client";

import { Title } from "../title";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PizzaImage } from "../product-image";
import { GroupVariants, Variant } from "../group-variants";
import Image from "next/image";
import { Ingredients, Products, ProductVariants } from "@/shared/lib/db/types";
import { cn } from "cn";
import { Button } from "../../ui";
import { sizesProduct } from "@/shared/helpers";
import { useGetDefaultVariantProduct } from "@/shared/hooks";

export interface Product {
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
	const  = useGetDefaultVariantProduct()

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
	
	const sizes = sizesProduct(product);
	
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
          "grid grid-cols-[55%_45%] items-center fixed rounded-3xl w-235 h-150 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
          className,
        )}
      >
        <PizzaImage imageUrl={defaultVariant.products.imageUrl} size={30} />

        <div className="bg-[#FCFCFC] p-7 h-full overflow-auto">
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

            {typeof defaultVariant.product_variants.pizzaType === "string" && (
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

                <div className="grid grid-cols-3 gap-5 mb-6">
                  {ingredients.map((item) => (
                    <button
                      key={item.id}
                      className="flex flex-col justify-center items-center rounded-2xl bg-gray-50 gap-1 hover:shadow-lg transition-all duration-200"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={88}
                        height={88}
                      />

                      <p className="text-center font-bold text-xs">
                        {item.name}
                      </p>

                      <p className="text-center font-extrabold text-sm">
                        {item.price}₽
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

          <div className="p-6 bg-[#FCFCFC]">
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
