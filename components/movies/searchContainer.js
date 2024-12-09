"use client";

import { Suspense, useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";
import classes from "./searchContaine.module.css";

function SearchContainer({ initialData }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={classes.container}>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <MovieList
        selectedGenre={selectedGenre}
        searchInput={searchInput}
        initialData={initialData}
      />
    </div>
  );
}

export default SearchContainer;
