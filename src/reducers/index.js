import { combineReducers } from "redux";
import MovieFetch from "./MovieFetch";
import PopularFetch from "./PopularFetch";
import SearchFetch from "./SearchFetch";

export default combineReducers({
  popular: PopularFetch,
  search: SearchFetch,
  movie: MovieFetch,
});
