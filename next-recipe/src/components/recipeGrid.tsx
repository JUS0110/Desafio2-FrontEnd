import { Recipe } from "@/types/recipe";
import RecipeCard from "./recipeCard";

type RecipeGridProps = {
  recipes: Recipe[];
  onRemove?: (id: number) => void;
};

export default function RecipeGrid({
  recipes,
  onRemove,
}: RecipeGridProps) {

  return (

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {recipes.map((recipe) => (

        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onRemove={onRemove}
        />

      ))}

    </section>

  );

}