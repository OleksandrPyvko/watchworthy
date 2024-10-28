import { getPopularMovies } from "@/lib/movies";
import MovieList from "@/components/movies/movieList";
import { Suspense } from "react";
import classes from "./page.module.css";

async function MoviesGrid() {
  const movies = await getPopularMovies();

  return <MovieList movies={movies} />;
}

function MoviesPage() {
  return (
    <>
      <Suspense fallback={<p className={classes.loading}>Loading movies...</p>}>
        <MoviesGrid />
      </Suspense>
    </>
  );
}

export default MoviesPage;


