import React, { useState, useEffect } from "react";
import axios from "../../components/axios/axios";
import "./ListPage.css";

const ListPage = () => {
    const [ films, setFilms ] = useState([]);
    const fetchFilms = "https://api.tvmaze.com/search/shows?q=comedy";

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchFilms);
        setFilms(request.data);
        return request;
      }
      fetchData();
    }, []);
    console.log(films);

    let img;

    if (films.image && films.image !== "") {
      img = films.image.medium;
    }

    return (
        <div>
        <div className="row">
        <h2 className="title__list">List</h2>

        <div className="row__posters">
          {films.map((film) => {
            return (
              <div className="poster" key={film.show.id}>
                <img 
                  key={film.show.id}
                  className="row__poster"
                  src={img}
                  alt={film.show.name}
                />
                <h4>{film.show.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
}
 
export default ListPage;