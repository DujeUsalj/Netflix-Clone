import React from "react";
import Row from "./Row.js";
import classes from "./App.module.css";
import requests from "./requests.module";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className={classes.App}>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        isLargeRow={false}
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        isLargeRow={false}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        isLargeRow={false}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        isLargeRow={false}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        isLargeRow={false}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        isLargeRow={false}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default App;
