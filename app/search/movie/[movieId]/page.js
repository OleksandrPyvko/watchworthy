import { getMovieDetails, getTrailer } from "@/lib/movies";
import MovieDetails from "@/components/movies/movie-details";
import AddToWatchLaterButton from "@/components/buttons/addToWatchLaterButton";
import { auth } from "@/app/auth";
import { getWatchedList, getWatchLaterList } from "@/lib/data-service";
import AddToWatchedButton from "@/components/buttons/addToWatchedButton";
import classes from "./page.module.css";
import Image from "next/image";
import Rating from "@/components/rating/rating-bar";

async function Page({ params }) {
  const { movieId } = await params;
  const session = await auth();

  const watchLaterList = await getWatchLaterList(session?.user.email);
  const watchLaterIds = watchLaterList?.map((movie) => movie.movieId);
  const inWatchLaterList = watchLaterIds?.includes(Number(movieId));

  const watchedList = await getWatchedList(session?.user.email);
  const watchedIds = watchedList?.map((movie) => movie.movieId);
  const inWatchedList = watchedIds?.includes(Number(movieId));

  const data = await getMovieDetails(movieId);
  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData !== undefined ? trailerData.key : null;

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

          {session ? (
            <>
              {!inWatchedList && (
                <AddToWatchLaterButton
                  movieId={movieId}
                  userEmail={session?.user.email}
                  inWatchLaterList={inWatchLaterList}
                  inWatchedList={inWatchedList}
                />
              )}

              <AddToWatchedButton
                movieId={movieId}
                userEmail={session?.user.email}
                inWatchedList={inWatchedList}
              />
            </>
          ) : (
            ""
          )}
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
  // return (
  //   <MovieDetails data={data} trailerKey={trailerKey} movieId={movieId}>
  //     <AddToWatchLaterButton
  //       movieId={movieId}
  //       userEmail={session?.user.email}
  //       inWatchLaterList={inWatchLaterList}
  //     />

  //     <AddToWatchedButton movieId={movieId} userEmail={session?.user.email} />
  //   </MovieDetails>
  // );
}

export default Page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
