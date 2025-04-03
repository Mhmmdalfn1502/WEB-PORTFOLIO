import React from "react";
import Header from "../sections/Home/Header";
import About from "../sections/Home/About";
import Project from "../sections/Home/Project";
import Navbar from "../components/Navbar";
import Contact from "../sections/Home/Contact";
import Cursor from "../components/Cursor";
import Experience from "../sections/Home/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-[#1b142a] to-[#100c19]">
      <Cursor />
      <Navbar />
      <Header id="home" />
      <About id="about" />
      <Project id="project" />
      <Experience id="experience" /> 
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
