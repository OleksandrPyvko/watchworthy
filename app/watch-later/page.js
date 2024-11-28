import { auth } from "@/app/auth";
import { getMoviesDetails, getWatchLaterList } from "@/lib/data-service";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function page() {
  const session = await auth();
  const moviesList = await getWatchLaterList(session.user.email);
  const moviesIds = moviesList.map((movie) => movie.movieId);

  const moviesDetails = await getMoviesDetails(moviesIds);

  console.log(moviesList);

  return (
    <>
      <h1>Movies you are planning to watch</h1>
      <div className={classes["movie-list"]}>
        {moviesDetails.map((movie) => (
          <>
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
            <div className={classes["buttons-container"]}>
              <button
                className={classes["watched-button"]}
              >
                Watched
              </button>
              <button className={classes['delete-button']}>Delete</button>
            </div>
           
            <h2>{movie.title}</h2>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
          </Link>
          
        </>
        ))}
      </div>
    </>
  );
}

export default page;
