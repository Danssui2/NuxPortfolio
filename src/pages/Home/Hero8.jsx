import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import { BsArrowRight } from "react-icons/bs";
import profile from "../../assets/images/male2.png";
import SocialMedia from "../../components/SocialMedia"
import { personalinfo } from "../../utils/constants";

export default function Hero8() {

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

  return (
    <section id="hero" className="text-gray-600 md:mt-0 mt-20 max-md:pb-16">
      <div className="flex flex-col md:grid md:grid-cols-8 items-center justify-center lg:gap-8">

        {/* Left Side */}
        <div className="col-span-2 gap-6 place-self-center max-w-xl flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center max-md:mt-5 text-center">
         
          <h1 className="lg:text-7xl text-6xl text-gray-700 dark:text-gray-200">
            Dior Nux
          </h1>
        
          <SocialMedia/>
          
          <div className="flex justify-center">
            <a href={personalinfo.cvLinkDownload}>
              <button className="text-white bg-primary-500 py-2 px-6 hover:brightness-110 text-center">
                Download CV
              </button>
            </a>        
          </div>      
        </div>

        {/* Avatar */}
        <div className="md:h-screen flex justify-center col-span-3">
          <img
            className="object-cover h-full object-center rounded grayscale"
            alt="profile"
            src={profile}
          />
        </div>

        {/** Right side */}
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
    </section>
  );
}
