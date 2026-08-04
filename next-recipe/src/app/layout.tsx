import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "NextRecipe",
  description: "Explore receitas deliciosas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        <Providers>

          <Header />

          {children}

          <Footer />

        </Providers>

      </body>
    </html>
  );
}
