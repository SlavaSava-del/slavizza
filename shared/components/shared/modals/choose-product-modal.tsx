"use client";

import { Title } from "../title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PizzaImage } from "../pizza-image";
import { GroupVariants, Variant } from "../group-variants";
import { Ingredients, Products, ProductVariants } from "@/shared/lib/db/types";
import { cn } from "cn";
import { Button } from "../../ui";
import {
  getPizzaTypeDescriptionAndProductCharacters,
  getSelectedProduct,
  getSizesProduct,
} from "@/shared/helpers";
import { AdditionalIngredient } from "./additional-ingredient";
import { useModal } from "@/shared/hooks/use-modal";

export interface Product {
  products: Products;
  product_variants: ProductVariants;
}

interface ChooseProductModalProps {
  product: Product[];
  ingredients: Ingredients[];
  defaultVariant: Product;
  className?: string;
}

gsap.registerPlugin(useGSAP);

export function ChooseProductModal({
  product,
  ingredients,
  defaultVariant,
  className,
}: ChooseProductModalProps) {
  const { size, setSize, type, setType, selectedIngredients, onAddIngredient } =
    useModal(defaultVariant);

  function handleChangeSize(value: number) {
    const availableTypes = product
      .filter((item) => item.product_variants.size === value)
      .map((item) => item.product_variants.pizzaType);

    setSize(value);

    if (type && !availableTypes.includes(type)) {
      setType(availableTypes[0] ?? null);
    }
  }

  const sizes = getSizesProduct(product);
  const selectedProduct = getSelectedProduct(product, size, type);
  const availablePizzaTypes = product
    .filter((item) => item.product_variants.size === size)
    .map((item) => item.product_variants.pizzaType);

  const pizzaTypes: Variant[] = [
    { name: "Традиционное", value: 1 },
    { name: "Тонкое", value: 2 },
  ].map((item) => ({
    ...item,
    disabled: !availablePizzaTypes.includes(String(item.value)),
  }));

  const selectedProductVariants = selectedProduct.product_variants;
  const defaultVariantProduct = defaultVariant.products;

  const productCharacters = getPizzaTypeDescriptionAndProductCharacters(
    selectedProductVariants,
  );

  const totalPrice =
    selectedProductVariants.price +
    ingredients.reduce(
      (acc, item) =>
        selectedIngredients.has(item.id) ? acc + item.price : acc,
      0,
    );

  return (
    <div
      className={cn(
        "grid grid-cols-[55%_45%] h-full overflow-hidden grid-rows-1 items-center z-30",
        className,
      )}
    >
      {type !== null ? (
        <PizzaImage
          imageUrl={selectedProductVariants.imageUrl}
          size={size}
          alt={selectedProduct.products.name}
        />
      ) : (
        <img
          className="p-7"
          src={selectedProductVariants.imageUrl}
          alt={selectedProduct.products.name}
        />
      )}

      <div className="flex flex-col bg-[#FCFCFC] h-full rounded-r-3xl">
        <div className="modal-scrollbar overscroll-contain mr-3 mt-2 min-h-0 overflow-y-auto overflow-x-hidden flex-1 p-7">
          <Title
            text={defaultVariantProduct.name}
            size="md"
            className="font-extrabold"
          />

          <p className="text-gray-400 mb-1">{productCharacters}</p>

          <p className="font-medium text-sm text-gray-700 mb-4 leading-tight">
            {defaultVariantProduct.ingredientsForProduct !== null
              ? defaultVariantProduct.ingredientsForProduct?.join(", ")
              : defaultVariantProduct.description !== null
                ? defaultVariantProduct.description
                : "Для этого продукта неизвестно описание."}
          </p>

          <div className="flex flex-col gap-2 mb-4">
            <GroupVariants
              onClick={(value) => handleChangeSize(value)}
              items={sizes}
              selectedValue={size}
            />

            {type !== null && (
              <GroupVariants
                items={pizzaTypes}
                selectedValue={+type}
                onClick={(value) => setType(String(value))}
              />
            )}
          </div>

          {defaultVariantProduct.allowAdditionalIngredients &&
            ingredients.length > 0 && (
              <>
                <Title
                  size="sm"
                  className="font-bold mb-1"
                  text="Добавить по вкусу"
                />

                <div className="grid grid-cols-3 gap-5 mb-6">
                  {ingredients.map((item) => (
                    <AdditionalIngredient
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      onClick={() => onAddIngredient(item.id)}
                      active={selectedIngredients.has(item.id)}
                    />
                  ))}
                </div>
              </>
            )}
        </div>

        <div className="p-6 bg-[#FCFCFC] z-30 rounded-br-3xl">
          <Button className="h-13.75 px-10 font-bold text-lg rounded-[18px] w-full">
            Добавить в корзину за {totalPrice} ₽
          </Button>
        </div>
      </div>
    </div>
  );
}
