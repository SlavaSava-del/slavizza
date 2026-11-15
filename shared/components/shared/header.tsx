import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { cn } from "cn";
import { CartButton } from "./drawer";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-5">
        <Link href={"/"}>
          <Image
            className="pb-3"
            src="/slavizza-logo.webp"
            alt="logo"
            width={240}
            height={75}
            loading="eager"
          />
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className={"flex items-center gap-1"}>
            <User size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
}
