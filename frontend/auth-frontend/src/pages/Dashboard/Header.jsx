import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Dashboard.css";
import "./css/Header.css";
import logo from "./logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();

  return (
    <header className="layout-header">
      <div className="layout-header_content">
        {/* logo */}
        <div className="logo-header_">
          <a className="logo-header" href="/">
            <img src={logo} alt="Hexagon Elearning" className="logo" />
          </a>
        </div>
        {/* features */}
        <div className="menu-header">
          {/* Left */}
          <div className="v-menu">
            <ul className="menu-header">
              <li
                className={`header-item ${
                  location.pathname === "/courses" ? "active" : ""
                }`}
              >
                <Link to="/courses">Courses</Link>
              </li>
              <li
                className={`header-item ${
                  location.pathname === "/roadmaps" ? "active" : ""
                }`}
              >
                <Link to="/roadmaps">Roadmaps</Link>
              </li>
              <li
                className={`header-item ${
                  location.pathname === "/ranking" ? "active" : ""
                }`}
              >
                <Link to="/ranking">Ranking</Link>
              </li>
              <li
                className={`header-item ${
                  location.pathname === "/faq" ? "active" : ""
                }`}
              >
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="v-right">
            <div className="v-searchBox">
              <span className="span-search">
                <input
                  type="text"
                  placeholder="What do you want to learn ?"
                  value={""}
                  className="search-input"
                />
                <span className="icon-search">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </span>
            </div>
            <div className="v-user">
              <a href="/login" className="v-login">
                Sign in
              </a>
              <a href="/register">
                <button type="button" className="v-register">
                  Register
                </button>
              </a>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
