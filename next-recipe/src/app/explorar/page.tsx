import { getRecipes } from "@/services/recipes";
import SearchBar from "@/components/searchBar";
import CategoryFilter from "@/components/categoryFilter";
import RecipeGrid from "@/components/recipeGrid";
import Pagination from "@/components/pagination";

type ExplorarProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
};

export default async function Explorar({
  searchParams,
}: ExplorarProps) {
  const params = await searchParams;

  const page = Number(params.page ?? "1");

  const search = params.search;

  const category = params.category;

  const data = await getRecipes(
  page,
  category,
  search
);

  const totalPages = Math.ceil(data.total / data.limit);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold text-orange-500">
          Explore Receitas
        </h1>

        <p className="text-gray-600 mt-4">
          Descubra sua próxima receita aqui.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mb-10">
        <SearchBar />
        <CategoryFilter />
      </section>

      <RecipeGrid recipes={data.recipes} />

      <Pagination
          currentPage={page}
          totalPages={totalPages}
      />

    </main>
  );
}




/*
import { getRecipes } from "@/services/recipes";

export default async function Explorar() {

  const data = await getRecipes();

  console.log(data);

  return (
  <>
    <Header />

    <main>

      {data.recipes.map((recipe) => (
        <p key={recipe.id}>{recipe.name}</p>
      ))}

    </main>

  </>
);
}
*/

