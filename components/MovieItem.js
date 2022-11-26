import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "../store/actions/actions";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Link
      href={`synopsis/${movie.id}`}
      className="movie"
      key={movie.id}
      onClick={() => dispatch(addToHistory(movie))}
    >
      <img src={movie?.i?.imageUrl} alt={movie.l} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.l}</h3>
        <div>
          <p>Cast: {movie.s}</p>
          <p>{movie.y}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;