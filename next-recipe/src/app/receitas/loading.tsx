export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <section className="flex flex-col items-center justify-center min-h-[400px]">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin">
        </div>

        <p className="mt-6 text-gray-600 text-lg">
          Carregando receitas...
        </p>

      </section>

    </main>
  );
}