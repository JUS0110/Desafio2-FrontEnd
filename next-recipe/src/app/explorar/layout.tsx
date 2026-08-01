import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchBar from "@/components/searchBar";
import CategoryFilter from "@/components/categoryFilter";
import RecipeGrid from "@/components/recipeGrid";
import Pagination from "@/components/pagination";

export default function ExplorarPage() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Título */}
        <section className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-500">
            Explore Receitas
          </h1>

          <p className="text-gray-600 mt-4">
            Descubra receitas deliciosas para qualquer ocasião.
          </p>
        </section>

        {/* Busca + Filtro */}
        <section className="flex flex-col md:flex-row gap-4 mb-10">

          <SearchBar />

          <CategoryFilter />

        </section>

        {/* Cards */}
        <RecipeGrid />

        {/* Paginação */}
        <Pagination currentPage={1} />

      </main>

      <Footer />
    </>
  );
}