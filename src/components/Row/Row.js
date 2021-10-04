import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./Row.css";

const Row = ({ title, fetchUrl, value }) => {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div>
      <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <div className="poster">
                <img
                  key={movie.id}
                  className="row__poster"
                  src={movie.image.medium}
                  alt={movie.name}
                />
                <h4>{movie.name}</h4>
                <h5>Status:{movie.status}</h5>
                <a href={movie.url}>
                  <h5>Watch now</h5>
                </a>
                <button 
                  className="heart">
                  <i
                    className="fa fa-heart"
                    aria-hidden="true"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Row;
