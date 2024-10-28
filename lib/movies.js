const API_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `${process.env.API_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/movie/popular?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results.slice(0, 20);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
