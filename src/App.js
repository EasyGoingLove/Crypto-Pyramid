import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
