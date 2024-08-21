import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Postid from "./pages/postid";
import Searchid from "./pages/searchid";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/pages/postid" element={Postid} />
      <Route path="/pages/searchid/:idNumber" element={Searchid} />
    </Routes>
  );
};

export default App;
