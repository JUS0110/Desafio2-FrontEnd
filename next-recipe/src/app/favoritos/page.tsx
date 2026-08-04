"use client";

import RecipeGrid from "@/components/recipeGrid";
import { useFavorites } from "@/context/favoritosContext";

export default function Favoritos() {

  const {
    favorites,
    removeFavorite,
  } = useFavorites();

  if (favorites.length === 0) {

    return (

      <main className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Meus Favoritos
        </h1>

        <p className="text-gray-500">
          Você ainda não favoritou nenhuma receita.
        </p>

      </main>

    );

  }

  return (

    <main className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-orange-500 mb-8">
        Meus Favoritos
      </h1>

      <RecipeGrid
        recipes={favorites}
        onRemove={removeFavorite}
      />

    </main>

  );

}