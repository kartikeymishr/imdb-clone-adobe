import { FETCH_MOVIES, FETCH_SYNOPSIS } from "../types";
import axios from "axios";

export const fetchMovies = (term) => async (dispatch) => {
  console.log("Mock fetchMovies API call here with query ::", term);

  dispatch({
    type: FETCH_MOVIES,
    payload: null,
  });
};

export const fetchSynopsis = (id) => async (dispatch) => {
  console.log("Mock fetchSynopsis API call here with id :: ", id);

  dispatch({
    type: FETCH_SYNOPSIS,
    payload: null,
  });
};