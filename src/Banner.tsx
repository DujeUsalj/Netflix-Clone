import classes from "./Banner.module.css";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests.module";
function Banner() {
  const [movie, setMovie] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      if (request.data.results) {
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      }
    }
    fetchData();
  }, []);
  function truncate(str: string, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className={classes.Banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.Contents}>
        <h1 className={classes.Title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.Buttons}>
          <button className={classes.Button}>Play</button>
          <button className={classes.Button}>My List</button>
        </div>
        <h1 className={classes.Description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={classes.FadeBottom}></div>
    </header>
  );
}

export default Banner;
