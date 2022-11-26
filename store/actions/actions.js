import axios from "axios";
import {
  ADD_TO_HISTORY,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_SYNOPSIS_ERROR,
  FETCH_SYNOPSIS_START,
  FETCH_SYNOPSIS_SUCCESS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../types";

export const fetchMovies = (term) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_START,
  });

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: term },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  };

  await axios
    .request(options)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: res.data.d,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: err.response,
      });
    });
};

export const fetchSynopsis = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_SYNOPSIS_START,
  });

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-synopses",
    params: { tconst: id },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  };

  await axios
    .request(options)
    .then((res) => {
      dispatch({
        type: FETCH_SYNOPSIS_SUCCESS,
        payload: res.data[0],
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: FETCH_SYNOPSIS_ERROR,
        payload: err.response,
      });
    });
};

export const addToHistory = (movie) => (dispatch) => {
  dispatch({ type: ADD_TO_HISTORY, payload: movie });
};

export const addToFavourites = (movieId) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITES, payload: movieId });
};

export const removeFromFavourites = (movieId) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_FAVOURITES, payload: movieId });
};