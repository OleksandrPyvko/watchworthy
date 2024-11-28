import { getMovieDetails, getTrailer } from "@/lib/movies";
import MovieDetails from "@/components/movies/movie-details";
import AddToWatchLaterButton from "@/components/buttons/addToWatchLaterButton";
import { auth } from "@/app/auth";
import { getWatchLaterList } from "@/lib/data-service";
import AddToWatchedButton from "@/components/buttons/addTowatchedButton";

async function Page({ params }) {
  const { movieId } = await params;
  const session = await auth();

  const list = await getWatchLaterList(session.user.email);
  const ids = list.map((movie) => movie.movieId);
  const inList = ids?.includes(Number(movieId));

  const data = await getMovieDetails(movieId);
  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData !== undefined ? trailerData.key : null;

  return (
    <MovieDetails data={data} trailerKey={trailerKey}>
      {inList ? (
        <span>Already in list</span>
      ) : (
        <AddToWatchLaterButton
          movieId={movieId}
          userEmail={session.user.email}
        />
      )}

      <AddToWatchedButton />
    </MovieDetails>
  );
}

export default Page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
