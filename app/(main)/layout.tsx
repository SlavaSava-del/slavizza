import { Header, HomeContent } from "@/shared/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Slavizza | Главная", template: "Slavizza | %s" },
  description: "Учебный проект на тему Клон Додо",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeContent />
      {children}
    </main>
  );
}
