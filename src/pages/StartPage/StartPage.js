import React from "react";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../components/requests";
import "./StartPage.css";


const StartPage = () => {

  return (
    <div className="startPage">
      <Banner />
      <Row title="Popular shows" fetchUrl={requests.fetchPopular} />
      <Row title="Interesting shows" fetchUrl={requests.fetchInteresting} />
    </div>
  );
};

export default StartPage;
