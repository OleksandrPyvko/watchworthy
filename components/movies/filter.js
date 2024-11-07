"use client";

import { useState } from "react";
import classes from "./filter.module.css";
import { getGenres } from "@/lib/movies";
import { useQuery } from "@tanstack/react-query";

function Filter({
  selectedGenre,
  setSelectedGenre,
  searchInput,
  setSearchInput,
}) {
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => getGenres(),
  });

  console.log(selectedGenre, "selectedGenre");

  function handleClick(value) {
    setSelectedGenre(value);
  }

  function handleChange(e) {    
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <input
        value={searchInput}
        onChange={handleChange}
        className={classes.input}
        type="text"
        placeholder="Search by title"
      />
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          listStyle: "none",
          padding: "0",
        }}
      >
        {genres?.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => handleClick(genre.id)}
              className={
                selectedGenre === genre.id
                  ? `${classes.active} ${classes["genre-button"]}`
                  : classes["genre-button"]
              }
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
