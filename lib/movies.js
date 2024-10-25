const API_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTcyOTg1NzMxNy44MTA3NDQsInN1YiI6IjY3MWI2ZDg4OWZmNjgxZDllMGEzZmM3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4JHxlKOqeZJf6QhMsdO31i3q3jxQcRVQeBa5Ueu_b58",
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
