"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./moviesList.module.css";
import { getMovies } from "@/lib/movies";
import { useQuery } from "@tanstack/react-query";

function MovieList({ searchInput, selectedGenre, initialData }) {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", selectedGenre, searchInput],
    queryFn: () => getMovies(searchInput, selectedGenre),
    initialData: initialData,
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies: {error.message}</div>;

  console.log(searchInput, "search input");

  return (
    <div className={classes["movie-list"]}>
      {movies?.map((movie) => (
        <Link
          href={`/search/movie/${movie.id}`}
          className={classes.card}
          key={movie.id}
          // style={{ border: "1px solid #ccc", padding: "1rem" }}
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
