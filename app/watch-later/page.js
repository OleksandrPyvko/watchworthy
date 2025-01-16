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

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Movies you are planning to watch</h2>
      <div className={classes["movie-list"]}>
        {moviesDetails.map((movie) => (
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
            <div className={classes.delete}>Delete</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
