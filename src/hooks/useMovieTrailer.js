import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice.js";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);


  //fetch video of type trailer
  const getMovieTrailerVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    const videoData = await fetch(url, API_OPTIONS);
    const json = await videoData.json();
    // console.log("json===>", json);

    const filteredData = json?.results?.filter((video) => {
      return video.type === "Trailer";
    });

    const trailerVideo = filteredData?.length
      ? filteredData[0]
      : json?.results[0];

    //console.log(trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    !trailerVideo && getMovieTrailerVideo();
  }, []);
};

export default useMovieTrailer;
