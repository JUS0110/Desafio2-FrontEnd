import RecipeCard from "./recipeCard";

export default function RecipeGrid() {
  return (

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

      <RecipeCard />

    </section>

  );
}