import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecipeHub",
  description: "Explore receitas deliciosas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
