import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { I18Provider, LOCALES } from "./i18n";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("language") !== null) {
      setLocale(localStorage.getItem("language"));
    } else {
      localStorage.setItem("language", locale);
    }
    if (localStorage.getItem("theme") !== null) {
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") !== theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("language") !== locale) {
      localStorage.setItem("language", locale);
    }
  }, [locale]);

  return (
    <div data-theme={theme}>
      <I18Provider locale={locale}>
        <Router>
          <NavBar
            setLanguage={setLocale}
            language={locale}
            setTheme={setTheme}
            theme={theme}
          />
          <Route exact path="/" component={HomePage} />
          <Footer />
        </Router>
      </I18Provider>
    </div>
  );
}

export default App;
