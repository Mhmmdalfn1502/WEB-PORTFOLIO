import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import 'animate.css';
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000, // Durasi animasi (ms)
  once: true, // Animasi hanya muncul sekali
});

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
