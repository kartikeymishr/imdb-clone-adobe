import {
  ADD_TO_HISTORY,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_SYNOPSIS_START,
  FETCH_SYNOPSIS_SUCCESS,
  FETCH_SYNOPSIS_ERROR,
} from "../types";

const initialState = {
  movies: [],
  movieSynopsis: undefined,
  history: new Set(),
  loadingMovies: false,
  loadingSynopsis: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, loadingMovies: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loadingMovies: false };
    case FETCH_MOVIES_ERROR:
      return { ...state, error: action.payload };
    case FETCH_SYNOPSIS_START:
      return { ...state, loadingSynopsis: true };
    case FETCH_SYNOPSIS_SUCCESS:
      return {
        ...state,
        movieSynopsis: action.payload,
        loadingSynopsis: false,
      };
    case FETCH_SYNOPSIS_ERROR:
      return { ...state, error: action.payload };
    case ADD_TO_HISTORY: {
      state.history.add(action.payload);

      return state;
    }
    default:
      return state;
  }
};