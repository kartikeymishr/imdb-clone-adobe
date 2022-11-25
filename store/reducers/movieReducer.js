import { FETCH_MOVIES, FETCH_SYNOPSIS } from "../types";

const initialState = {
  movies: [],
  movieSynopsis: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return state;
    case FETCH_SYNOPSIS:
      return state;
    default:
      return state;
  }
};