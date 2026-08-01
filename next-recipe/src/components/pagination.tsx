import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <section className="flex justify-between mt-10">

      {currentPage > 1 ? (
        <Link href={`/explorar?page=${currentPage - 1}`}>
          ← Anterior
        </Link>
      ) : (
        <div />
      )}

      <span>
        Página {currentPage} de {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={`/explorar?page=${currentPage + 1}`}>
          Próximo →
        </Link>
      ) : (
        <div />
      )}

    </section>
  );
}