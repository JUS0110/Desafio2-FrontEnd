import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="rounded-xl shadow-md overflow-hidden">

      <img
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {recipe.name}
        </h2>

        <p className="text-gray-500">
          ⭐ {recipe.rating}
        </p>

        <p>
          ⏱️{" "}
          {recipe.cookTimeMinutes + recipe.cookTimeMinutes > 0
           ? `${recipe.cookTimeMinutes + recipe.cookTimeMinutes} minutos`
           : "Tempo não informado"}
        </p>

        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
          ❤️ Favoritar
        </button>

      </div>

    </article>
  );
}