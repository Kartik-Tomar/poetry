import React, { useState } from "react";

import { LOCALES } from "../i18n";
import translate from "../i18n/translate";

function NavBar({ language, setLanguage, theme, setTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <a className="navbar-brand" href="/">
        Poetry
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              {translate("Home")} <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {translate("Poem")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {translate("Story")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {translate("EBooks")}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {translate("Categories")}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                {translate("Category", { value: "1" })}
              </a>
              <a className="dropdown-item" href="/">
                {translate("Category", { value: "2" })}
              </a>
              <a className="dropdown-item" href="/">
                {translate("Category", { value: "3" })}
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav mr-1">
          <li className="nav-item dropleft">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="languageDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {language === LOCALES.ENGLISH ? "EN" : "HI"}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="languageDropdown"
              style={{ margin: "0px", padding: "0px" }}
            >
              <p
                className="dropdown-item mt-2 mb-0"
                onClick={() => setLanguage(LOCALES.ENGLISH)}
                id="EN"
              >
                ENGLISH
              </p>
              <p
                className="dropdown-item my-2"
                onClick={() => setLanguage(LOCALES.HINDI)}
                id="HI"
              >
                HINDI
              </p>
            </div>
          </li>
          <li className="nav-item">
            <p
              className="nav-link mb-0"
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
              style={{ fontSize: "0.9rem" }}
            >
              {theme === "light" ? (
                <i className="fa fa-moon-o fa-2x" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-sun-o fa-2x" aria-hidden="true"></i>
              )}
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ fontSize: "0.9rem" }}>
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ fontSize: "0.9rem" }}>
              <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item dropleft">
            <a
              className="nav-link"
              href="/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="user"
                style={{ width: "32px", marginRight: "5px" }}
              />
            </a>
            <div className="dropdown-menu" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="/">
                DashBoard
              </a>
              <a className="dropdown-item" href="/">
                My Favorites
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Log Out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
