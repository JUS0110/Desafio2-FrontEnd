export default function RecipeCard() {
  return (

    <article className="rounded-xl shadow-md overflow-hidden">

      <img
        src="https://placehold.co/400x250"
        alt="Receita"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          Lasanha
        </h2>

        <p className="text-gray-500">
          ⭐ 4.8
        </p>

        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">

          ❤️ Favoritar

        </button>

      </div>

    </article>

  );
}