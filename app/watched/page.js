import { getMoviesDetails, getWatchedList } from "@/lib/data-service";
import { auth } from "../auth";
import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";

async function Page({ searchParams }) {
  const params = await searchParams;
  const sortParam = params["sort"];
  console.log(sortParam);
  const session = await auth();
  const moviesList = await getWatchedList(session?.user.email);
  const moviesIds = moviesList.map((movie) => movie.movieId);
  const moviesDetails = await getMoviesDetails(moviesIds);

  const updatedList = moviesDetails.map((movie) => {
    const x = moviesList.find((m) => m.movieId === movie.id);
    return { ...movie, rating: x.rating, created_at: x.created_at };
  });

  const sortedList = updatedList.sort((a, b) => {
    if (sortParam === "rating") {
      return b.rating - a.rating;
    } else if (sortParam === "watch-date") {
      return new Date(b["created_at"]) - new Date(a["created_at"]);
    } else {
      return updatedList;
    }
  });

  console.log(sortedList);

  return (
    <>
      <h1>Watched movies</h1>
      <div>
        <h2>Sort by:</h2>
        <Link href={`${"/watched?sort=rating"}`}>rating</Link>
        <br />
        <Link href={`${"/watched?sort=watch-date"}`}>date watched</Link>
        <br />
        <Link href={`${"/watched"}`}>Clear sort</Link>
      </div>

      <div className={classes["movie-list"]}>
        {sortedList.map((movie) => (
          <Link
            href={`/search/movie/${movie.id}`}
            className={classes.card}
            key={movie.id}
          >
            <div
              className={`${classes.rating} ${
                movie.rating <= 4 ? classes["rating-low"] : ""
              }
                ${movie.rating <= 7 ? classes["rating-mid"] : ""}
                `}
            >
              <div className={classes["rating-holder"]}>{movie.rating}</div>
            </div>
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
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Page;
