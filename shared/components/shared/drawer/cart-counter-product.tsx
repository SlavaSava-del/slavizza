import { CartItemFull } from "@/shared/db-data/get-cart-items";

interface CartCounterProductProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function CartCounterProduct({
  quantity,
  onDecrease,
  onIncrease,
}: CartCounterProductProps) {
  return (
    <div className="flex justify-between py-2 px-3 rounded-3xl bg-gray-100">
      <button type="button" disabled={quantity <= 1} onClick={onDecrease}>
        -
      </button>

      <span>{quantity}</span>

      <button type="button" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
