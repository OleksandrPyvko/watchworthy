function page({ params }) {
  const movieID = params.movieId;
  return <p>{movieID}</p>;
}

export default page;
