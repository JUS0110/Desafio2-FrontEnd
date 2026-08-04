"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { Recipe } from "@/types/recipe";

type FavoritesContextType = {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: number) => void;
};

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [favorites, setFavorites] = useState<Recipe[]>(() => {

    if (typeof window === "undefined") {
      return [];
    }

    return JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );

  });

  function addFavorite(recipe: Recipe) {

    const alreadyExists = favorites.some(
      item => item.id === recipe.id
    );

    if (alreadyExists) return;

    const updated = [...favorites, recipe];

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

  }

  function removeFavorite(id: number) {

    const updated = favorites.filter(
      recipe => recipe.id !== id
    );

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

  }

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >

      {children}

    </FavoritesContext.Provider>

  );

}

export function useFavorites() {

  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites deve ser usado dentro de FavoritesProvider."
    );
  }

  return context;

}