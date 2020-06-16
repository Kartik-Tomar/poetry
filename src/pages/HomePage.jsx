import React, { Component } from "react";

import translate from "../i18n/translate";

import Poem from "../components/Poem";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-1 text-center">
              <strong>POETRY{console.log("111")}</strong>
            </h1>
            <p className="display-4 text-center">{translate("jumbotron2")}</p>
          </div>
        </div>
        <div className="container">
          <h2 className="display-3 text-center m-2 mb-4">
            {translate("TodayTop")}
          </h2>
          <Poem />
        </div>
      </div>
    );
  }
}

export default HomePage;
