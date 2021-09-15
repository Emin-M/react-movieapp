import api from "../api/api";

export const fetchPopular = () => async (dispatch) => {
  const response = await api.get(
    "/discover/movie?sort_by=popularity.desc&api_key=5497906cc47b2e7fbb2350457bf82060"
  );
  dispatch({ type: "FETCH_POPULAR", payload: response.data.results });
};

export const fetchMovies = (term) => async (dispatch) => {
  const response = await api.get(
    `/search/movie/?api_key=5497906cc47b2e7fbb2350457bf82060&language=en-US&query=${term}&page=1`
  );
  dispatch({ type: "FETCH_SEARCH", payload: response.data.results });
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await api.get(
    `/movie/${id}?api_key=5497906cc47b2e7fbb2350457bf82060`
  );
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
};
