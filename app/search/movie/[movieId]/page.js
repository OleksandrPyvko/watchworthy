import { getMovieDetails, getTrailer } from "@/lib/movies";
import Image from "next/image";
import classes from "./page.module.css";

async function page({ params }) {
  const { movieId } = await params;

  // const movie = await getMovieDetails(movieId);
  const {
    genres,
    original_title,
    title,
    overview,
    poster_path,
    release_date,
    tagline,
    runtime,
    vote_average,
  } = await getMovieDetails(movieId);

  const genresList = genres.map((genre) => genre.name);
  const genresString = genresList.join(", ");

  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData !== undefined ? trailerData.key : null;

  return (
    <div className={classes.details}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes["details-container"]}>
        <div className={classes["image-wrapper"]}>
          <Image
            className={classes["movie-poster"]}
            fill
            alt="Movie poster"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        </div>
        <div
          style={{
            maxWidth: "100%",
          }}
        >
          <h3 className={classes.tagline}>{tagline}</h3>
          <div className={classes["details-grid"]}>
            <span>Rating: </span>
            <span>{vote_average}</span>
            <span>Release date: </span> <span>{release_date}</span>
            <span>Original title: </span> <span>"{original_title}"</span>
            <span>Genres: </span> <span>{genresString}</span>
            <span>Runtime: </span> <span>{runtime} min</span>
          </div>
          <h3>Overview: </h3>
          <p
            style={{
              maxWidth: "800px",
            }}
          >
            {overview}
          </p>
        </div>
      </div>
      <div className={classes.trailer}>
        {trailerKey === null ? (
          <p style={{ width: "250px" }}>No available trailers 8(</p>
        ) : (
          <iframe
            // width="560"
            // height="315"
            width="720"
            height="480"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title={`Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
