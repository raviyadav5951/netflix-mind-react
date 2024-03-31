import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
