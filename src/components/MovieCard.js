import React from "react";
import { IMG_CDN_URL, LOGO } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48">
      <img
        alt="movie_card"
        src={posterPath ? `${IMG_CDN_URL}${posterPath}` : LOGO}
      />
    </div>
  );
};

export default MovieCard;
