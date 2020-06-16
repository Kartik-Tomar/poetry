import React from "react";

import translate from "../i18n/translate";

const Footer = () => {
  return (
    <div>
      <footer className="my-4 pt-5 text-muted text-center text-small">
        <ul className="list-inline">
          <li className="list-inline-item mx-4">
            <a href="/" className="text-secondary">
              <i className="fab fa-facebook-square fa-7x"></i>
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="/" className="text-secondary">
              <i className="fab fa-twitter-square fa-7x"></i>
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="/" className="text-secondary">
              <i className="fab fa-instagram-square fa-7x"></i>
            </a>
          </li>
        </ul>
        <h5 className="mb-1 ">{translate("Copyright", { value: "POETRY" })}</h5>
      </footer>
    </div>
  );
};

export default Footer;
