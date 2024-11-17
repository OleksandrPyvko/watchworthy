<<<<<<< HEAD
import { getPopularMovies } from "@/lib/movies";
import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

async function page() {
  const movies = await getPopularMovies();

  return (
    <div className={classes["movie-list"]}>
      {movies.map((movie) => (
        <Link
          href={`/search/${movie.id}`}
          className={classes.card}
          key={movie.id}
          
        >
          <div className={classes["image-wrapper"]}>
            <Image
              fill
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <h2>{movie.title}</h2>
          {/* <p>{movie.overview}</p> */}
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
        </Link>
      ))}
=======
import SearchContainer from "@/components/movies/searchContainer";
import classes from './page.module.css'
function MoviesPage() {
  return (
    <div className={classes.search}>
      {/* <Suspense fallback={<p className={classes.loading}>Loading movies...</p>}> */}
      <SearchContainer />
      {/* </Suspense> */}
>>>>>>> b0e2fe8a7391d5182dea293b6614d61eb87e499b
    </div>
  );
}

export default MoviesPage;
