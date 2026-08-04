import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-150 overflow-hidden">

      {/* Imagem de fundo */}
      <Image
        src="/imagens/banner-hero.jpg"
        alt="Mesa com diversas comidas"
        fill
        priority
        className="object-cover"
      />

      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-white">

        <h1 className="mb-6 text-6xl font-bold">
          A sua próxima receita está aqui!
        </h1>

        <p className="mb-8 max-w-2xl text-xl">
          Explore centenas de receitas, descubra novos sabores
          e salve suas favoritas.
        </p>

        <Link
          href="/explorar"
          className="rounded-lg bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
        >
          Explorar receitas
        </Link>

      </div>

    </section>
  );
}