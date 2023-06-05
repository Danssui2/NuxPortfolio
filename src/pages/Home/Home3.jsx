import React, { useEffect } from "react";
import Typed from "typed.js";

import { BsArrowDown } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia"
import { Link } from "react-scroll"

export default function Home3() {

  useEffect(() => {
    const typed = new Typed(".typed-animation", {
      strings: ["Dior Nux", "Web Developer", "Photograper", "Model", "Designer"],
      typeSpeed: 70,
      backSpeed: 60,
      backDelay: 3000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []); 

/* This code is defining a React component called Home3 that renders a hero section for a website.
The section includes a background image, a welcome message with a typed animation effect, social
media links, a button to scroll to the "about" section, and an arrow icon to indicate scrolling.
The section is styled with CSS classes for text color, background color, and spacing. */

  return (
    <section
      id="hero"
      className="relative text-gray-700 dark:text-gray-400 w-full"
    >
      <img className="bg-[url('https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-no-repeat bg-cover w-full h-full absolute inset-0 z-0 bg-center brightness-[40%] dark:brightness-[30%]" alt="" />
      <div className="h-screen"></div>

      <div className="absolute inset-0 z-10 flex justify-center items-center flex-col">

        <div className="flex flex-col gap-4 items-center mb-6">
          <h2 className="text-gray-400 dark:text-gray-300">Welcome</h2>
          <h1 className="text-4xl xl:text-5xl font-semibold text-center text-primary-500 mb-2">
            <span className="text-gray-200 dark:text-gray-100">I'm </span>
            <span className="typed-animation text-primary-500">Dior Nux</span>
          </h1>
          <p className="text-gray-400 text-[16px] px-6 dark:text-gray-300 text-center">
            I am a versatile multitalent freelancer, adept at seamlessly navigating multiple professions.
          </p>
        </div>

        <SocialMedia buttonStyle="dark:bg-gray-900/50 bg-gray-300 text-gray-700 dark:text-gray-400 p-3 rounded"/>

        <Link to="about" className="bg-transparent font-semibold border border-px border-gray-400 dark:border-gray-300 text-gray-400 dark:text-gray-300 mt-6 px-6 py-2 text-lg hover:scale-105 transition-transform">About Me</Link>

        <div className="md:absolute text-gray-400 dark:text-gray-200 bottom-10 left-10 lg:left-20 flex items-center mt-4 md:mt-0 gap-5">
          <BsArrowDown className="animate-bounce mt-2" />{" "}
          Scroll Down
        </div>
      </div>
    </section>
  );
}
