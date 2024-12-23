"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./moviesList.module.css";
import { getMovies } from "@/lib/movies";
import { Loader } from "../loader/loader";

function MovieList({ searchInput, selectedGenre, page }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedMovies = await getMovies(searchInput, selectedGenre, page);
        setMovies(fetchedMovies);
      } catch (err) {
        setError(err.message || "An error occurred while fetching movies.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [searchInput, selectedGenre, page]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching movies: {error}</div>;

  return (
    <div className={classes["movie-list"]}>
      {movies?.map((movie) => (
        <Link
          href={`/search/movie/${movie.id}`}
          className={classes.card}
          key={movie.id}
        >
          <div className={classes["image-wrapper"]}>
            <Image
              fill
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={classes["card-img"]}
            />
          </div>
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
