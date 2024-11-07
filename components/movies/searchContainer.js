"use client";

import { useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";

function SearchContainer() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  console.log(selectedGenre);

  return (
    <>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <MovieList selectedGenre={selectedGenre} searchInput={searchInput} />
    </>
  );
}

export default SearchContainer;
