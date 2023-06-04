/* This is importing various modules and components from different files and libraries. */
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import profile from "../../assets/images/avatar-home1.png";
import SocialMedia from "../../components/SocialMedia"
import { personalinfo } from "../../utils/constants";
import { BsArrowDown } from "react-icons/bs";

export default function Home1() {

 /* This is a React hook called `useEffect` that is used to perform side effects in a functional
 component. In this case, it is creating a new instance of the `Typed` library and passing in some
 options to create a typed animation effect on an element with the class `typed-animation`. The `[]`
 as the second argument to `useEffect` means that this effect will only run once when the component
 mounts. The `return` statement inside the `useEffect` function is a cleanup function that will
 destroy the `Typed` instance when the component unmounts. */
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

/* This is a React component that represents the hero section of a webpage. It includes a profile
picture, a typed animation introducing the person, a brief description of their skills and
experience, buttons to download their CV and hire them, and some statistics about their
projects, satisfaction, and experience. The component uses various CSS classes and styles to
position and style the different elements. */

  return (
    <section id="hero" className="text-gray-600 md:mt-0 mt-20 max-md:pb-16">
      <div className="flex flex-col md:grid md:grid-cols-8 items-center justify-center lg:gap-8">

        {/* Left Side */}
        <div className="lg:flex-grow col-span-3 place-self-center max-w-xl flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center max-md:mt-5 text-center">
          <p className="mb-2 text-gray-600 dark:text-gray-400">
            - Hi everyone
          </p>
          <h2 className="title-font mb-2 lg:text-5xl text-4xl text-primary-500">
            <span className="text-gray-700 dark:text-gray-200">I'm </span>
            <span className="typed-animation text-primary-500">Dior Nux</span>
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
            I am a versatile multitalent freelancer, adept at seamlessly navigating multiple professions and delivering exceptional result.
          </p>
          <div className="flex justify-center">
            <a href={personalinfo.cvLinkDownload}>
              <button className="text-white bg-primary-500 py-2 px-6 hover:brightness-110 text-center">
                Download CV
              </button>
            </a>
            <Link
              href="#contact"
              to="contact"
              smooth={true}
              duration={500}
              offset={-150}
              className="ml-4 cursor-pointer inline-flex text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:scale-105 text-lg"
            >
              Hire Me
            </Link>         
          </div>

          <div className="flex gap-5 mt-8 items-center">
            <p className="font-bold max-md:hidden text-gray-600 dark:text-gray-400">
              Find Me :
            </p>
            <SocialMedia/>
          </div>
        </div>

        <div className="md:absolute bottom-10 text-gray-800 dark:text-gray-200 left-20 flex items-center mt-4 md:mt-0 gap-5">
          <BsArrowDown className="animate-bounce mt-2" />{" "}
          Scroll Down
        </div>

        {/* Avatar */}
        <div className="md:h-screen flex justify-center col-span-4 clip1 bg-gradient-to-bl from-primary-600 to-primary-500">
          <img
            className="object-cover h-full object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>

        {/** Right side */}
        <div className="flex md:flex-col justify-self-end justify-center gap-12 mt-10 lg:mt-0">
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              1K
            </h2>
            <p className="dark:text-gray-200 font-semibold">Project</p>
          </div>
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              100%
            </h2>
            <p className="dark:text-gray-200 font-semibold">Satisfaction</p>
          </div>
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              5Yrs
            </h2>
            <p className="dark:text-gray-200 font-semibold">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
