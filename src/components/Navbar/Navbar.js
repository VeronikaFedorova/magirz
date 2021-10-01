import React, { useEffect, useState } from "react";
import "./Navbar.css";
import movies from "../../components/Row/Row";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ value }) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <div className="navbar__logo">
        <a href="/">
          <i className="fa fa-film" aria-hidden="true"></i>
        </a>
      </div>
      <SearchBar value={value} />
      <div>
        <a href="/login">Log in</a>
      </div>
      <div>
        <a href="/userpage">
          <i className="far fa-user"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
