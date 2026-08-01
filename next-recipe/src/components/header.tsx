import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-orange-500">
        🍳 NextRecipe
      </h1>

      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Início</Link>
          </li>

          <li>
            <Link href="/explorar">Explorar</Link>
          </li>

          <li>
            <Link href="/favoritos">Favoritos</Link>
          </li>

          <li>
            <Link href="/conta">Conta</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}