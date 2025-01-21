import { auth } from "@/app/auth";
import {
  deleteFromWatchLater,
  getMoviesDetails,
  getWatchLaterList,
} from "@/lib/data-service";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { deleteFromWatchLaterAction } from "@/lib/actions";

async function page() {
  const session = await auth();
  const moviesList = await getWatchLaterList(session.user.email);
  const moviesIds = moviesList.map((movie) => movie.movieId);
  const moviesDetails = await getMoviesDetails(moviesIds);

  return (
    <div className={classes.container}>
      {moviesDetails.length <= 0 ? (
        <div className={classes["empty-list"]}>
          <p className={classes["empty-list-text"]}>
            Oops, no <span className={classes.highlight}>movies</span> here.
            Guess it’s time to explore!
          </p>
          <Link href="/search" className={classes.explore}>
            +
          </Link>
        </div>
      ) : (
        <h2 className={classes.heading}>Movies you are planning to watch</h2>
      )}

      <div className={classes["movie-list"]}>
        {moviesDetails.map((movie) => (
          <div key={movie.id} className={classes["movie-card"]}>
            <form
              action={deleteFromWatchLaterAction}
              className={classes["delete-form"]}
            >
              <input readOnly name="email" value={session.user.email} hidden />
              <input readOnly name="movieId" value={movie.id} hidden />

              <button className={classes.delete} type="submit">
                Delete
              </button>
            </form>
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={50}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
