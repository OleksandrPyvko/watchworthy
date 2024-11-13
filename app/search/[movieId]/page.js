async function page({ params }) {
  const { movieId } = await params;
  return <p>{movieId}</p>;
}

export default page;
