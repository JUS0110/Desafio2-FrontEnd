import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">

      <h1 className="text-6xl font-bold mb-6">
        A sua próxima receita está aqui! 🍳
      </h1>

      <p className="text-xl max-w-xl mb-8">
        Explore centenas de receitas, descubra novos sabores
        e salve suas favoritas.
      </p>

      <Link
        href="/explorar"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        Explorar receitas
      </Link>

    </section>
  );
}