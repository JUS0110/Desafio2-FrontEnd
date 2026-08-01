"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Todas",
  "Italian",
  "Japanese",
  "Thai",
  "Mexican",
  "Pakistani",
];

export default function CategoryFilter() {

  const router = useRouter();

  const searchParams = useSearchParams();


  function handleCategoryChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {

    const category = event.target.value;


    const params = new URLSearchParams(searchParams);


    if (category === "Todas") {

      params.delete("category");

    } else {

      params.set(
        "category",
        category
      );

    }


    const query = params.toString();


    router.push(
      query
        ? `/explorar?${query}`
        : "/explorar"
    );

  }


  return (
    <div className="flex flex-col gap-2">

      <label className="font-semibold">
        Categoria
      </label>


      <select
        onChange={handleCategoryChange}
        className="
          border
          rounded-lg
          px-4
          py-2
          bg-white
        "
      >

        {categories.map((category) => (

          <option
            key={category}
            value={category}
          >
            {category}
          </option>

        ))}

      </select>

    </div>
  );
}