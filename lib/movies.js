// for some reason says 'unauthorized' when using requests by api key

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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results.slice(0, 40);
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTczMDk3NDA4OS4wOTg4ODI3LCJzdWIiOiI2NzFiNmQ4ODlmZjY4MWQ5ZTBhM2ZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RIZPfvBX4ZfhUircC__YLaf6QpP3VreGbzeDRskHCrg",
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTczMDk3NDA4OS4wOTg4ODI3LCJzdWIiOiI2NzFiNmQ4ODlmZjY4MWQ5ZTBhM2ZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RIZPfvBX4ZfhUircC__YLaf6QpP3VreGbzeDRskHCrg",
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

// export async function getMovieByGenre(genreId) {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTczMDk3NDA4OS4wOTg4ODI3LCJzdWIiOiI2NzFiNmQ4ODlmZjY4MWQ5ZTBhM2ZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RIZPfvBX4ZfhUircC__YLaf6QpP3VreGbzeDRskHCrg",
//     },
//   };

//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
//     options
//   );
//   const data = await response.json();
//   return data.results;
// }

export async function getGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTczMDk3NDA4OS4wOTg4ODI3LCJzdWIiOiI2NzFiNmQ4ODlmZjY4MWQ5ZTBhM2ZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RIZPfvBX4ZfhUircC__YLaf6QpP3VreGbzeDRskHCrg",
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );

    const data = await response.json();
    return data.genres;
  } catch (err) {
    console.error("Error occured", err);
  }
}

export async function getMovies(searchInput, selectedGenre) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRjMTg3N2JiYjUzYjlhYzFhMWJiMDYwYTgzOGRiNyIsIm5iZiI6MTczMDk3NDA4OS4wOTg4ODI3LCJzdWIiOiI2NzFiNmQ4ODlmZjY4MWQ5ZTBhM2ZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RIZPfvBX4ZfhUircC__YLaf6QpP3VreGbzeDRskHCrg",
    },
  };

  let endpoint;

  if (!searchInput && !selectedGenre) {
    endpoint = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  } else if (searchInput) {
    endpoint = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      searchInput
    )}&include_adult=false&language=en-US&page=1`;
  } else if (selectedGenre) {
    endpoint = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`;
  }

  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results.slice(0, 40); // Adjust slicing if necessary
}
