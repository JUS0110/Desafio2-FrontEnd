import Link from "next/link";

type PaginationProps = {
  currentPage: number;
};

export default function Pagination({
  currentPage,
}: PaginationProps) {
  return (

    <section className="flex justify-between mt-10">

      <Link href={`/explorar?page=${currentPage - 1}`}>
        ← Anterior
      </Link>

      <span>
        Página {currentPage}
      </span>

      <Link href={`/explorar?page=${currentPage + 1}`}>
        Próximo →
      </Link>

    </section>

  );
}