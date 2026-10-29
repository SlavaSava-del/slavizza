import type { Metadata } from "next";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Slavizza | Главная",
  description: "Учебный проект на тему Клон Додо",
};

export default function MainLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
