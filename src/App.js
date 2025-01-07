import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
