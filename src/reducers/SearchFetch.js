const INITIAL_STATE = [];

const SearchFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      state = action.payload;
      return state;
    case "FETCH_POPULAR":
      state = [];
      return state;
    default:
      return state;
  }
};

export default SearchFetch;
