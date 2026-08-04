import Image from "next/image";
import { getRecipe } from "@/services/recipes";

type RecipePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipePage({
  params,
}: RecipePageProps) {

  const { id } = await params;

  const recipe = await getRecipe(Number(id));

  return (

    <main className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold text-black mb-8">
        {recipe.name}
      </h1>

      <div className="flex justify-center-left mb-8">

        <Image
          src={recipe.image}
          alt={recipe.name}
          width={500}
          height={200}
          className="rounded-xl object-cover"
        />

      </div>

      <p>⭐ {recipe.rating}</p>
      <p>⏱️ {recipe.cookTimeMinutes} minutos</p>
      <p>🍽️ {recipe.servings} porções</p>
      <p>🌎 {recipe.cuisine}</p>

      <h2 className="text-3xl font-bold mt-10 mb-4">
        Ingredientes
      </h2>

      <ul className="list-disc ml-6">

        {recipe.ingredients.map((ingredient: string) => (

          <li key={ingredient}>
            {ingredient}
          </li>

        ))}

      </ul>

      <h2 className="text-3xl font-bold mt-10 mb-4">
        Modo de preparo
      </h2>

      <ol className="list-decimal ml-6">

        {recipe.instructions.map((step: string) => (

          <li
            key={step}
            className="mb-3"
          >
            {step}
          </li>

        ))}

      </ol>

    </main>

  );

}