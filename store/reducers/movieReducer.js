import {
  ADD_TO_HISTORY,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_SYNOPSIS_START,
  FETCH_SYNOPSIS_SUCCESS,
  FETCH_SYNOPSIS_ERROR,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../types";

const initialState = {
  movies: [],
  movieSynopsis: undefined,
  history: new Set(),
  loadingMovies: false,
  loadingSynopsis: false,
  error: undefined,
  errorStatusCode: 0,
  favourites: new Set(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        loadingMovies: true,
        errorStatusCode: 0,
        error: undefined,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
        errorStatusCode: 0,
        error: undefined,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload.data,
        errorStatusCode: action.payload.status,
        loadingMovies: false,
      };
    case FETCH_SYNOPSIS_START:
      return {
        ...state,
        loadingSynopsis: true,
        errorStatusCode: 0,
        error: undefined,
      };
    case FETCH_SYNOPSIS_SUCCESS:
      return {
        ...state,
        movieSynopsis: action.payload,
        loadingSynopsis: false,
        errorStatusCode: 0,
        error: undefined,
      };
    case FETCH_SYNOPSIS_ERROR:
      return {
        ...state,
        error: action.payload,
        errorStatusCode: action.payload.status,
        loadingSynopsis: true,
      };
    case ADD_TO_HISTORY: {
      state.history.add(action.payload);

      return state;
    }
    case ADD_TO_FAVOURITES:
      state.favourites.add(action.payload);

      return state;
    case REMOVE_FROM_FAVOURITES:
      state.favourites.delete(action.payload);

      return state;
    default:
      return state;
  }
};