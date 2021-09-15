const INITIAL_STATE = {
  movie: [],
  credits: [],
};

const MovieFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default MovieFetch;
