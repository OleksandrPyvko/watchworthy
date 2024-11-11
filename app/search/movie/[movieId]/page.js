import { getMovieDetails, getTrailer } from "@/lib/movies";
import Image from "next/image";
import classes from "./page.module.css";
import MovieDetails from "@/components/movies/movie-details";

async function page({ params }) {
  const { movieId } = await params;

  const data = await getMovieDetails(movieId);

 

  const trailerData = await getTrailer(movieId);
  const trailerKey = trailerData !== undefined ? trailerData.key : null;

  return (
   <MovieDetails data={data} trailerKey={trailerKey}/>
  );
}

export default page;
// genres, original_title, overview, poster_path, release_date, tagline, vote_average
