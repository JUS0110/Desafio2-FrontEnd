export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold text-orange-500 text-center mb-10">
        Explore Receitas
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-4 animate-pulse"
          >

            <div className="bg-gray-300 h-48 rounded-lg"></div>

            <div className="h-5 bg-gray-300 rounded mt-4"></div>

            <div className="h-4 bg-gray-300 rounded mt-3 w-2/3"></div>

          </div>
        ))}

      </div>

    </main>
  );
}