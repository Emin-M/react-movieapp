const INITIAL_STATE = {
  movie: [],
  credits: [],
  person: [],
};

const MovieFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "FETCH_CREDITS":
      return {
        ...state,
        credits: action.payload.cast,
      };
    case "FETCH_PERSON":
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

export default MovieFetch;
