import { getMovieDetails, getTrailer } from "@/lib/movies";
import MovieDetails from "@/components/movies/movie-details";
import AddToWatchLaterButton from "@/components/buttons/addToWatchLaterButton";
import { auth } from "@/app/auth";

async function page({ params }) {
  const { movieId } = await params;
  const session = await auth();

  const data = await getMovieDetails(movieId);

  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData !== undefined ? trailerData.key : null;

  return (
    <MovieDetails data={data} trailerKey={trailerKey}>
      <AddToWatchLaterButton movieId={movieId} userEmail={session.user.email} />
    </MovieDetails>
  );
}

export default page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
