import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/actions";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const isLoading = useSelector((state) => state.movieReducer.loadingMovies);

  useEffect(() => {
    if (term !== "") {
      dispatch(fetchMovies(term));
    }
  }, [term]);

  const debouncedFunc = useCallback(
    debounce((e) => {
      setTerm(e.target.value);
    }, 300),
    []
  );

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search..."
        // value={term}
        onChange={debouncedFunc}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        movies?.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })
      )}
    </section>
  );
};

export default Search;