"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchBar() {

  const [search, setSearch] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();


  function handleSearch() {

    const params = new URLSearchParams(searchParams);


    if(search.trim()) {
      params.set(
        "search",
        search
      );
    } else {
      params.delete("search");
    }


    router.push(
      `/explorar?${params.toString()}`
    );

  }


  return (
    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Buscar receita..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border rounded-lg px-4 py-2 flex-1"
      />


      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-4 rounded-lg"
      >
        Buscar
      </button>

    </div>
  );
}