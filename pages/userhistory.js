import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";

const History = () => {
  const movies = useSelector((state) => state.movieReducer.history);

  return (
    <section className="history">
      {Array.from(movies)
        .reverse()
        ?.map((movie) => {
          return <MovieItem movie={movie} />;
        })}
    </section>
  );
};

export default History;