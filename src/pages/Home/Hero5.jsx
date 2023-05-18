import React, { useEffect } from "react";
import profile from "../../assets/images/male1.png";
import Typed from "typed.js";

import { BsArrowDown } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia"

export default function Hero5() {

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
    <section
      id="hero"
      className="text-gray-700 dark:text-gray-400 mt-20 bg-grid"
    >
      <div className="h-[90vh] flex justify-center items-center flex-col">
        <div className="rounded-full relative w-52 h-52 md:w-56 md:h-56 flex justify-center items-center mb-4">
          <div className="spinner w-full h-full rounded-full"></div>
          <div className="w-[92%] h-[92%] absolute flex justify-center roundclip bg-gray-100/90 dark:bg-gray-900/90">
            <img
              className="object-cover object-center gray h-full"
              src={profile}
              alt="profile"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl xl:text-5xl font-semibold text-center text-primary-500 mb-2">
            <span className="text-gray-700 dark:text-gray-200">Hi, I'm </span>
            <span className="typed-animation text-primary-500">Dior Nux</span>
          </h1>
          <p className="text-gray-600 text-[16px] dark:text-gray-400 text-center w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, animi, ullam labore reprehenderit unde minima quidem itaque.
          </p>
        </div>

        <SocialMedia buttonStyle="bg-gray-100 dark:bg-gray-900/50 p-3 rounded"/>

        <div className="md:absolute bottom-10 left-10 flex items-center mt-4 md:mt-0 gap-5">
          <BsArrowDown className="text-gray-900 dark:text-gray-200 animate-bounce mt-2" />{" "}
          Scroll Down
        </div>
      </div>
    </section>
  );
}
