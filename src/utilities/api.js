const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
// console.log(API_TOKEN);
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";

function getPopularMovie() {
  return fetch(`${API_ENDPOINT}/movie/popular`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getTopRated() {
  return fetch(
    `${API_ENDPOINT}/movie/top_rated
  `,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getUpcoming() {
  return fetch(
    `${API_ENDPOINT}/movie/upcoming?region=US
    `,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getNowPlaying() {
  return fetch(
    `${API_ENDPOINT}/movie/now_playing
      `,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieById(movieId) {
  return fetch(
    `${API_ENDPOINT}/movie/${movieId}?append_to_response=videos%2Ccredits`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieBySearch(query) {
  return fetch(
    `${API_ENDPOINT}/search/movie?query=${query}&include_adult=false`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getListOfGenre() {
  return fetch(`${API_ENDPOINT}/genre/movie/list`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function getMovieByGenre(genreID) {
  return fetch(`${API_ENDPOINT}/discover/movie?with_genres=${genreID}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

export {
  getPopularMovie,
  IMAGE_URL_BASE,
  getMovieById,
  getTopRated,
  getUpcoming,
  getNowPlaying,
  getMovieBySearch,
  getListOfGenre,
  getMovieByGenre,
};
