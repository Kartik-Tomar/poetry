import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { I18Provider, LOCALES } from "./i18n";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18Provider locale={locale}>
      {console.log("11")}
      <Router>
        <NavBar setLanguage={setLocale} language={locale} />
        <Route exact path="/" component={HomePage} />
        <Footer />
      </Router>
    </I18Provider>
  );
}

export default App;
