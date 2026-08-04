import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-orange-500 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/imagens/logo (3).png"
            alt="Logo NextRecipe"
            width={50}
            height={50}
            priority
          />

          <span className="text-2xl font-bold">
            NextRecipe
          </span>

        </Link>

        <nav className="flex gap-6 font-semibold">

          <Link
            href="/"
            className="hover:text-orange-200 transition"
          >
            Home
          </Link>

          <Link
            href="/explorar"
            className="hover:text-orange-200 transition"
          >
            Explorar
          </Link>

          <Link
            href="/favoritos"
            className="hover:text-orange-200 transition"
          >
            Favoritos
          </Link>

        </nav>

      </div>

    </header>
  );
}