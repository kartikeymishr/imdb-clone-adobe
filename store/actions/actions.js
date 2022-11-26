import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_SYNOPSIS_START,
  FETCH_SYNOPSIS_SUCCESS,
  FETCH_SYNOPSIS_ERROR,
  ADD_TO_HISTORY,
} from "../types";
import axios from "axios";

export const fetchMovies = (term) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_START,
  });

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: term },
    headers: {
      "X-RapidAPI-Key": "962c77c3c7msh47089bba1cc3c16p1d5480jsn04488128265f",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
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
      dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: err,
      });
    });
};

export const fetchSynopsis = (id) => async (dispatch) => {
  console.log("Mock fetchSynopsis API call here with id :: ", id);

  dispatch({
    type: FETCH_SYNOPSIS_START,
  });

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-synopses",
    params: { tconst: id },
    headers: {
      "X-RapidAPI-Key": "962c77c3c7msh47089bba1cc3c16p1d5480jsn04488128265f",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
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
      dispatch({
        type: FETCH_SYNOPSIS_ERROR,
        payload: err,
      });
    });
};

export const addToHistory = (movie) => (dispatch) => {
  console.log("Adding movie to history :: ", movie);

  dispatch({ type: ADD_TO_HISTORY, payload: movie });
};