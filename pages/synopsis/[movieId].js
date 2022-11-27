import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorCard from "../../components/ErrorCard";
import Spinner from "../../components/Spinner";
import {
  addToFavourites,
  fetchSynopsis,
  removeFromFavourites,
} from "../../store/actions/actions";

const Synopsis = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const router = useRouter();
  const { movieId } = router.query;

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.movieReducer.loadingSynopsis);
  const favourites = useSelector((state) => state.movieReducer.favourites);
  const movie = useSelector((state) =>
    state.movieReducer.movies.find((obj) => obj.id === movieId)
  );
  const movieSynopsis = useSelector(
    (state) => state.movieReducer.movieSynopsis
  );
  const errorStatusCode = useSelector(
    (state) => state.movieReducer.errorStatusCode
  );

  useEffect(() => {
    dispatch(fetchSynopsis(movieId));

    if (favourites.has(movieId)) {
      setIsFavourite(true);
    }
  }, []);

  const handleFavourites = () => {
    if (favourites.has(movieId)) {
      dispatch(removeFromFavourites(movieId));
      setIsFavourite(false);
    } else {
      dispatch(addToFavourites(movieId));
      setIsFavourite(true);
    }
  };

  return (
    <div className="synopsis">
      <div className="synopsis-movie-info">
        <img src={movie?.i.imageUrl} alt="poster" />
        <div className="movie-info-right">
          <h2>{movie?.l}</h2>
          <p>Cast: {movie?.s}</p>
          <p>Release Year: {movie?.y}</p>
          <button
            onClick={handleFavourites}
            className={isFavourite ? `button-on` : `button-off`}
          >
            Favourite
          </button>
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : errorStatusCode > 0 ? (
        <ErrorCard />
      ) : (
        <div className="synopsis-info">
          <div className="synopsis-info-header">
            <h4>Synopsis</h4>
          </div>
          <p>{movieSynopsis?.text}</p>
        </div>
      )}
    </div>
  );
};

export default Synopsis;