import Image from "next/image";
import classes from "./movie-details.module.css";
import Rating from "../rating/rating-bar";
import { auth } from "@/app/auth";

async function MovieDetails({ data, trailerKey, movieId, children }) {
  const session = await auth();

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
  } = data;

  const genresList = genres.map((genre) => genre.name);
  const genresString = genresList.join(", ");

  return (
    <div className={classes.details}>
      <h2 className={classes.highlight}>{title}</h2>
      <div className={classes["details-container"]}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div className={classes["image-wrapper"]}>
            <Image
              className={classes["movie-poster"]}
              fill
              alt="Movie poster"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
          </div>
          <div> {children} </div>
          <p style={{ color: "white" }}>Your rating:</p>
          <Rating userEmail={session.user.email} movieId={movieId} />
        </div>
        <div
          style={{
            maxWidth: "100%",
          }}
        >
          <h3 className={[classes.tagline, classes.highlight].join(" ")}>
            {tagline}
          </h3>
          <div className={classes["details-grid"]}>
            <span className={classes.highlight}>Rating: </span>
            <span>{vote_average}</span>
            <span className={classes.highlight}>Release date: </span>
            <span>{release_date}</span>
            <span className={classes.highlight}>Original title: </span>
            <span>&quot;{original_title}&quot;</span>
            <span className={classes.highlight}>Genres: </span>
            <span>{genresString}</span>
            <span className={classes.highlight}>Runtime: </span>
            <span>{runtime} min</span>
          </div>
          <h3 className={classes.highlight}>Overview: </h3>
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

export default MovieDetails;

