import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import profile from "../../assets/images/female1.png";
import { BsArrowRight } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia"

function Hero2() {

  useEffect(() => {
    const typed = new Typed(".typed-animation", {
      strings: ["Diora Nux", "Graphic Designer", "Product Designer", "UX Designer", "UI Designer"],
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
    <div
      id="hero"
      className="flex gap-8 mt-20 justify-center items-center md:flex-row flex-col pb-16 md:pb-0 bg-grid"
    >
      <div className="relative flex justify-center md:ml-[14rem]">
        <div className="flex h-[16rem] mr-4 justify-center bg-gradient-to-bl shadow-lg from-primary-600 to-primary-500 md:hidden">
          <img
            className="h-full object-cover object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>
        
        <div>
          <h1 className="md:text-9xl text-7xl flex items-center md:absolute dark:text-gray-200 text-gray-800 font-bold top-[20%] -left-[13rem] leading-[0.8]">
            Diora <br /> Nux
          </h1>
          <h1 className="md:text-9xl text-7xl flex items-center md:absolute text-transparent text-stroke font-bold top-[20%] -left-[13rem] leading-[0.8] z-40">
            Diora <br /> Nux
          </h1>
        </div>

        <div className="h-[33rem] w-[22rem] hidden md:block">
          <img src={profile} className="flex z-20 absolute w-full" alt="" />
        </div>

        <div className="gap-5 items-center absolute top-[70%] -left-[12.5rem] hidden md:flex">
          <SocialMedia/>
        </div>
      </div>

      <div className="w-[21rem] flex flex-col md:items-start items-center justify-center gap-3 md:mt-0 mt-6">
        <div className="text-gray-600 dark:text-gray-400 ">- Hello, I'm</div>
        <h2 className="text-[2.2em] leading-[1.1em] text-primary-500 text-center md:text-left">
          <span className="text-primary-500 typed-animation">Dior Nux</span>{" "}
          <br />{" "}
          <span className="text-gray-900 dark:text-gray-200">
            currently based in Luxembourg
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo optio magni earum qui dolor hic et omnis asperiores obcaecati.
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
    </div>
  );
}

export default Hero2;
