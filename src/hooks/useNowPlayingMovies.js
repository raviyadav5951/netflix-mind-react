import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN";

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
