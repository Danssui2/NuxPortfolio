import React from "react";

import Navbar from "../components/Navbar";
import Hero from "./Home/Hero1";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

export default function Index() {
  return (
    <div
      id="index"
      className="w-full flex flex-col items-center scroll-smooth dark:bg-gray-800 bg-gray-50"
    >
      {/** All the section goes here. *From top to bottom orderly */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
