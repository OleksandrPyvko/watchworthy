"use client";

import { Suspense, useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";
import classes from "./searchContainer.module.css";
import PageNav from "./page-nav";

function SearchContainer({ initialData }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

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
        initialData={initialData}
        page={page}
      />
      <PageNav page={page} setPage={setPage} />
    </div>
  );
}

export default SearchContainer;
