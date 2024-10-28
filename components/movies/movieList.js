import Image from "next/image";
import Link from "next/link";
import classes from "./moviesList.module.css";

function movieList({ movies }) {
  return (
    <div className={classes["movie-list"]}>
      {movies.map((movie) => (
        <Link
          href={`/search/${movie.id}`}
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

export default movieList;
