import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ErrorCard = () => {
  const error = useSelector((state) => state.movieReducer.error);

  useEffect(() => {
    console.log("Printing from ErrorCard");
    console.log(error);
  }, [error]);

  return <div className="error">{error?.message}</div>;
};

export default ErrorCard;