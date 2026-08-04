"use client";

import Link from "next/link";
import Image from "next/image";

import { Recipe } from "@/types/recipe";
import { useFavorites } from "@/context/favoritosContext";

type RecipeCardProps = {
  recipe: Recipe;
  onRemove?: (id: number) => void;
};

export default function RecipeCard({
  recipe,
  onRemove,
}: RecipeCardProps) {

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const favorite = favorites.some(
    item => item.id === recipe.id
  );

  return (

    <article className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition">

      <Link href={`/receitas/${recipe.id}`}>

        <div className="relative w-full h-52">

          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw,
                   (max-width:1200px) 50vw,
                   25vw"
          />

        </div>

        <div className="p-4">

          <h2 className="text-xl font-bold">
            {recipe.name}
          </h2>

          <p className="text-gray-500">
            ⭐ {recipe.rating}
          </p>

          <p>
            ⏱️ {
              recipe.cookTimeMinutes > 0
                ? `${recipe.cookTimeMinutes} minutos`
                : "Tempo não informado"
            }
          </p>

        </div>

      </Link>

      <div className="px-4 pb-4">

        {onRemove ? (

          <button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              removeFavorite(recipe.id);
            }}
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            🗑️ Excluir
          </button>

        ) : (

          <button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              addFavorite(recipe);
            }}
            disabled={favorite}
            className={`mt-2 w-full px-4 py-2 rounded-lg text-white transition ${
              favorite
                ? "bg-green-600 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >

            {favorite
              ? "✔ Adicionado"
              : "❤️ Favoritar"}

          </button>

        )}

      </div>

    </article>

  );

}