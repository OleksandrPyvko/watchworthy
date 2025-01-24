"use client";

import { useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";
import classes from "./searchContainer.module.css";
import PageNav from "./page-nav";

function SearchContainer() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  return (
    <div className={classes.container}>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setPage={setPage}
      />

      <MovieList
        selectedGenre={selectedGenre}
        searchInput={searchInput}
        page={page}
        setLastPage={setLastPage}
      />

      <PageNav page={page} setPage={setPage} lastPage={lastPage} />
    </div>
  );
}

export default SearchContainer;
