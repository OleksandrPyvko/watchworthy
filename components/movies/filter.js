"use client";

import classes from "./filter.module.css";

function Filter({
  selectedGenre,
  setSelectedGenre,
  searchInput,
  setSearchInput,
  setPage,
}) {
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  function handleClick(value) {
    if (selectedGenre === value) {
      setSelectedGenre(null);
      setPage(1);
      return;
    }
    setSelectedGenre(value);
    setPage(1);
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
    setPage(1);
  }

  return (
    <div className={classes.container}>
      <input
        value={searchInput}
        onChange={handleChange}
        className={classes.input}
        type="text"
        placeholder="Search by title"
      />
      <ul className={classes["filter-container"]}>
        {genres?.map((genre) => (
          <li key={genre.id} className={classes["filter-button"]}>
            <button
              onClick={() => handleClick(genre.id)}
              className={
                genre.id === selectedGenre
                  ? classes["active-filter"]
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
  s;
}

export default Filter;
