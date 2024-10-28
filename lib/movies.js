const API_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.API_TOKEN}`,
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

export async function getMovieDetails(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch movie details: ${err}`);
  }
}

export async function getTrailer(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch trailer: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results.find((video) => video.type === "Trailer");
  } catch (error) {
    throw new error("Failed to fetch trailer");
  }
}
