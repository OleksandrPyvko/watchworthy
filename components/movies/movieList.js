"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./moviesList.module.css";
import { getMovies } from "@/lib/movies";
import { Loader } from "../loader/loader";

function MovieList({ searchInput, selectedGenre, page, setLastPage }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    setIsLoading(true)
  }

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      setError(null);
      setLastPage(false);

      try {
        const fetchedMovies = await getMovies(searchInput, selectedGenre, page);
        setMovies(fetchedMovies);
        if (fetchedMovies?.length < 20) {
          setLastPage(true);
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching movies.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [searchInput, selectedGenre, page, setLastPage]);

  if (isLoading)
    return (
      <div className={classes.loader}>
        <Loader />
      </div>
    );
  if (error) return <div>Error fetching movies: {error}</div>;

  return (
    <>
      {!selectedGenre && !searchInput && (
        <h2 className={classes.heading}>Popular now</h2>
      )}
      <div className={classes["movie-list"]}>
        {movies?.map((movie) => (
          <Link
            href={`/search/movie/${movie.id}`}
            className={classes.card}
            key={movie.id}
            onClick={handleClick}
          >
            <div className={classes["image-wrapper"]}>
              <Image
                fill
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={classes["card-img"]}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={50}
              />
            </div>
            <h2 className={classes.title}>{movie.title}</h2>
            <p className={classes.info}>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className={classes.info}>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MovieList;
