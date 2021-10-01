import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [ movie, setMovie ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      setMovie(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  let img;

  if (movie.image && movie.image !== "") {
    img = movie.image.medium;
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner">
      <div className="banner__img">
        <img src={img} alt="Movie" />
      </div>
      <div className="banner__content">
        <h1 className="banner__title">{movie.name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <span className="heart">
            <i 
              className="fa fa-heart" 
              aria-hidden="true"
            />
          </span>
        </div>

        <h1 className="banner__description">{truncate(movie.summary, 150)}</h1>
      </div>

    </header>
  );
};

export default Banner;
