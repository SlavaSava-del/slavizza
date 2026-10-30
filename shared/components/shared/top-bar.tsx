import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { CategoriesList } from "./categories-list";
import { Categories } from "@/shared/lib/db/types";
import { cn } from "cn";

interface TopBarProps {
  categories: Categories[];
  className?: string;
}

export function TopBar({ className, categories }: TopBarProps) {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between">
        <CategoriesList categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
}
