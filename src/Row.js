import classes from "./Row.module.css";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [autoplay, setAutoplay] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: autoplay,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("1");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className={classes.Row}>
      <h2>{props.title} </h2>
      <div className={classes.Posters}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={(event) => handleClick(movie)}
              className={`${
                props.isLargeRow ? classes.PosterLarge : classes.Poster
              }`}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
