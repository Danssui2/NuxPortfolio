import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import profile from "../../assets/images/avatar-home-designer.png";
import { BsArrowRight } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia"

export default function HomeDesigner() {

  useEffect(() => {
    const typed = new Typed(".typed-animation", {
      strings: ["Graphic Designer", "Product Designer", "UX Designer", "UI Designer"],
      typeSpeed: 70,
      backSpeed: 60,
      backDelay: 3000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    /* This is a React component called "HomeDesigner" that represents the hero section of a website. It
    includes a profile image, a typed animation of the designer's skills, and a call-to-action
    button to learn more about the designer. The section has a unique ID of "hero" and is styled
    using CSS classes for flexbox layout, spacing, and background color. The component also imports
    and uses other components such as "Link" from "react-scroll" and "SocialMedia". */
    <section
      id="hero"
      className="flex gap-8 mt-20 justify-center items-center lg:flex-row flex-col pb-16 lg:pb-0 bg-grid"
    >
      <div className="relative flex justify-center lg:ml-[13rem]">
        <div className="flex h-[16rem] mr-4 justify-center bg-gradient-to-bl from-primary-400 to-primary-600 shadow-lg lg:hidden">
          <img
            className="h-full object-cover object-center"
            alt="profile"
            src={profile}
          />
        </div>
        
        <div>
          <h1 className="lg:text-9xl text-7xl flex items-center lg:absolute dark:text-gray-200 text-gray-800 font-bold top-[20%] -left-[12rem] leading-[0.8]">
            Dior <br /> Nux
          </h1>
          <h1 className="lg:text-9xl text-7xl flex items-center lg:absolute text-transparent text-stroke font-bold top-[20%] -left-[12rem] leading-[0.8] z-40">
            Dior <br /> Nux
          </h1>
        </div>

        <div className="h-[33rem] w-[22rem] justify-center items-center hidden lg:flex">
          <img src={profile} className="flex z-20 absolute w-full" alt="" />
          <div className="w-96 h-96 absolute bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
        </div>

        <div className="gap-5 items-center absolute top-[70%] -left-[11.5rem] hidden lg:flex">
          <SocialMedia/>
        </div>
      </div>

      <div className="max-w-[21rem] flex flex-col lg:items-start items-center justify-center gap-3 lg:mt-0 mt-6">
        <div className="text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center lg:justify-start flex-col lg:flex-row w-full">
          <span>Hello, I'm</span>
          <div className='w-[10%] border-b-2 border-b-gray-500'></div>
        </div>
        <h2 className="text-[2.2em] leading-[1.1em] text-primary-500 text-center lg:text-left">
          <span className="text-primary-500 typed-animation">Dior Nux</span>{" "}
          <br />{" "}
          <span className="text-gray-900 dark:text-gray-200">
            currently based in Luxembourg
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
          A very creative and detail-oriented designer with a passion for visual aesthetics and a keen eye for design principles.
        </p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-30}
          className="w-fit font-Montserrat font-medium flex gap-4 items-center text-primary-500 border-0 border-b-2 border-b-primary-500 hover:scale-105"
        >
          Know Me More{" "}
          <span className="text-xl">
            <BsArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
