/* These lines of code are importing various components from different files in the project. These
components will be used in the `Index` component to render a webpage with multiple sections in a
specific order. The `React` import is necessary to use JSX syntax in the component. */
import React, { useState } from "react";

import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

import Home1 from "./Home/Home1";
import Home2 from "./Home/Home2";
import Home3 from "./Home/Home3";
import HomeDesigner from "./Home/HomeDesigner";
import HomeDeveloper from "./Home/HomeDeveloper";
import HomeModel from "./Home/HomeModel";
import HomePhotographer from "./Home/HomePhotographer";

import Modal from "../components/Modal";

export default function Index() {
  /* This is a React component called "Index" that renders a webpage with multiple sections in a
specific order. The component includes a div with an id of "index" and several classes for
styling purposes. Inside the div, there are multiple sections including Navbar, Hero, About,
Services, Projects, Testimonials, Blog, Contact, and Footer. These sections are rendered in a
specific order from top to bottom. */

  const [home, setHome] = useState("Home1");
  const [changer, setChanger] = useState(false);

  const HomeChangerButton = ({ home }) => {
    return (
      <button
        className="bg-primary-500 text-gray-200 text-lg px-4 py-2"
        onClick={() => {
          setHome(home);
          setChanger(false);
        }}
      >
        {home}
      </button>
    );
  };

  return (
    <div
      id="index"
      className="w-full flex flex-col items-center scroll-smooth dark:bg-gray-800 bg-gray-50"
    >
      <Navbar />
      {home == "Home1" ? (
        <Home1 />
      ) : home == "Home2" ? (
        <Home2 />
      ) : home == "Home3" ? (
        <Home3 />
      ) : home == "HomeDesigner" ? (
        <HomeDesigner />
      ) : home == "HomeDeveloper" ? (
        <HomeDeveloper />
      ) : home == "HomeModel" ? (
        <HomeModel />
      ) : home == "HomePhotographer" ? (
        <HomePhotographer />
      ) : null}
      {changer == true ? (
        <Modal title="Home Variations" onClose={() => setChanger(false)}>
          <div className="flex flex-col gap-2 dark:text-gray-300 text-gray-600">
            <HomeChangerButton home="Home1" />
            <HomeChangerButton home="Home2" />
            <HomeChangerButton home="Home3" />
            <HomeChangerButton home="HomeDesigner" />
            <HomeChangerButton home="HomeDeveloper" />
            <HomeChangerButton home="HomeModel" />
            <HomeChangerButton home="HomePhotographer" />
          </div>
        </Modal>
      ) : null}
      <button
        onClick={() => setChanger(true)}
        className="text-lg z-30 fixed bottom-20 right-10 dark:text-gray-300 text-gray-600 hover:scale-110 cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-full py-2 px-4"
      >
        Change Home Design
      </button>
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
