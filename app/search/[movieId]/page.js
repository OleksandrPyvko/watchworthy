import { getMovieDetails, getTrailer } from "@/lib/movies";

async function page({ params }) {
  const { movieId } = await params;

  // const movieDetails = await getMovieDetails(movieId);
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    tagline,
    vote_average,
  } = await getMovieDetails(movieId);
  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData.key;

  return (
    <div>
      <p>{`Movie id: ${movieId}`}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title={`Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
