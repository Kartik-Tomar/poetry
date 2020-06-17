import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { I18Provider, LOCALES } from "./i18n";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  useEffect(() => {
    if (localStorage.getItem("language") !== null) {
      setLocale(localStorage.getItem("language"));
    } else {
      localStorage.setItem("language", locale);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("language") !== locale) {
      localStorage.setItem("language", locale);
    }
  }, [locale]);

  return (
    <I18Provider locale={locale}>
      <Router>
        <NavBar setLanguage={setLocale} language={locale} />
        <Route exact path="/" component={HomePage} />
        <Footer />
      </Router>
    </I18Provider>
  );
}

export default App;
