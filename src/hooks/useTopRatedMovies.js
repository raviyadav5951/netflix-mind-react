import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const getTopRatedMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
