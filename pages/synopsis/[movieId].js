import { createHrefFromUrl } from "next/dist/client/components/reducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorCard from "../../components/ErrorCard";
import Spinner from "../../components/Spinner";
import { fetchSynopsis } from "../../store/actions/actions";

const Synopsis = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movieReducer.movies.find((obj) => obj.id === movieId)
  );
  const movieSynopsis = useSelector(
    (state) => state.movieReducer.movieSynopsis
  );
  const isLoading = useSelector((state) => state.movieReducer.loadingSynopsis);
  const errorStatusCode = useSelector(
    (state) => state.movieReducer.errorStatusCode
  );

  useEffect(() => {
    dispatch(fetchSynopsis(movieId));
  }, []);

  return (
    <div className="synopsis">
      <div className="synopsis-movie-info">
        <h2>{movie?.l}</h2>
        <div>
          <p>Cast: {movie?.s}</p>
          <p>Release Year: {movie?.y}</p>
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : errorStatusCode > 0 ? (
        <ErrorCard />
      ) : (
        <div className="synopsis-info">
          <h4>Synopsis</h4>
          <p>{movieSynopsis?.text}</p>
        </div>
      )}
    </div>
  );
};

export default Synopsis;