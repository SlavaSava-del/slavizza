"use client";

import { Products } from "@/lib/db/types";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface SearchInputProps {
  className?: string;
}

export function SearchInput({ className }: SearchInputProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products
        .search(searchQuery)
        .then((items) => setProducts(items))
        .catch((e) => console.error(e));
    },
    250,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-30 invisible opacity-0 transition-all duration-200",
          focused && "visible opacity-100",
        )}
      />

      <div
        ref={ref}
        className={cn(
          "flex rounded-xl h-11 flex-1 relative justify-between z-30",
          className,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Найти пиццу..."
          className="rounded-2xl w-full pl-11 bg-gray-50 outline-none hover:bg-gray-100 focus:bg-gray-100 transition-all duration-300"
          onClick={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute top-14 w-full rounded-xl py-2 bg-white shadow-md z-30 opacity-0 transition-all duration-200 invisible",
              focused && "top-12 visible opacity-100",
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={onClickItem}
                className="flex items-center gap-3 hover:bg-primary/10 px-3 py-2 transition-all duration-300"
              >
                <Image
                  src={product.imageUrl}
                  width={50}
                  height={50}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
