"use client";

import { ReactNode } from "react";
import { FavoritesProvider } from "@/context/favoritosContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  );
}