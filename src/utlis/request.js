const key = "19a218754c5f30aae7b0fb900d5e6a17";

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};

export default request;
