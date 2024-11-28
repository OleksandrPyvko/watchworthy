"use client";

import { useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";

function SearchContainer({initialData}) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <MovieList selectedGenre={selectedGenre} searchInput={searchInput} initialData={initialData}/>
    </>
  );
}

export default SearchContainer;
