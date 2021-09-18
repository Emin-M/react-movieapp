const INITIAL_STATE = [];

const PopularFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POPULAR":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default PopularFetch;
