import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { ProductsForCard } from "./products-group-list";
import Image from "next/image";

type ProductCardProps = Omit<
  ProductsForCard,
  "allowAdditionalIngredients" | "categoryId"
>;

export function ProductCard({
  id,
  name,
  price,
  imageUrl,
  count,
  ingredientsForProduct,
  description,
  isNew,
  isHit,
  isSuperPrice,
}: ProductCardProps) {
  const isHaveFeauture = isNew || isHit || isSuperPrice;
  const featureImg = isNew
    ? "/slavizza_novinka.webp"
    : isHit
      ? "/slavizza_hit.webp"
      : "/slavizza_supertsena.webp";

  return (
    <Link
      href={`/product/${id}`}
      scroll={false}
      className="group flex flex-col h-full relative"
    >
      {isHaveFeauture && (
        <img
          src={featureImg}
          alt="sticker"
          className="group-hover:translate-y-1 group-hover:rotate-3 absolute top-2 left-2 h-16 transition-all duration-200 z-5"
        />
      )}

      <div className="group-hover:bg-[#fff6ed] transition-all duration-200 flex justify-center p-6 bg-secondary rounded-lg h-65">
        <Image
          src={imageUrl}
          alt={name}
          width={215}
          height={215}
          className="w-full h-auto object-contain group-hover:translate-y-2 transition-all duration-200 z-0"
        />
      </div>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">
        {ingredientsForProduct !== null
          ? ingredientsForProduct.join(", ")
          : description !== null
            ? description
            : "Информация о продукте неизвестна"}
      </p>

      <div className="flex justify-between items-center mt-auto pt-4">
        <span className="text-[20px]">
          {count !== 1 && "от"} <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus
            size={20}
            className="mr-1 group-hover:rotate-90 transition-all duration-200"
          />
          Добавить
        </Button>
      </div>
    </Link>
  );
}
