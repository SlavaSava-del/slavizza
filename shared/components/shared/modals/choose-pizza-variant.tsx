import { cn } from "cn";
import { Button } from "../../ui";
import { PizzaImage } from "../product-image";
import { Title } from "../title";

interface ChoosePizzaVariantProps {
  imageUrl: string;
  name: string;
  className?: string;
}

export function ChoosePizzaVariant({
  imageUrl,
  name,
  className,
}: ChoosePizzaVariantProps) {
  const textDetails = "30 см, традиционное тесто 30, 590 г";
  const totalPrice = 550;

  return (
    <div
      className={cn(
        "flex justify-center items-center h-full overflow-hidden rounded-3xl",
        className,
      )}
    >
      <PizzaImage imageUrl={imageUrl} size={30} />

      <div className="w-115 bg-[#FCFCFC] p-7 h-full">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <p className=""></p>

        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice}₽
        </Button>
      </div>
    </div>
  );
}
