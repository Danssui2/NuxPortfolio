import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import profile from "../../assets/images/photograper2.png";
import { personalinfo } from "../../utils/constants";
import SocialMedia from "../../components/SocialMedia";

export default function Hero4() {

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
    <section id="hero" className="text-gray-600 lg:pb-0 pb-16 mt-20 md:mt-0 md:h-screen">
      <div className="md:grid block md:grid-cols-10 md:place-items-center">
        <div className="w-full md:col-span-3 mb-6">
          <SocialMedia />
          <h2 className="title-font lg:w-[40rem] md:w-[36rem] break-words mt-2 md:absolute text-left lg:text-8xl md:text-7xl text-4xl text-gray-700 dark:text-gray-200">
            <span className="typed-animation">Dior Nux</span>
          </h2>
        </div>

        <div className="md:h-screen mb-4 md:mb-0 md:col-span-6 xl:ml-6 w-fit flex justify-center bg-gradient-to-bl from-primary-600 to-primary-500">
          <img
            className="object-cover z-20 object-center rounded"
            alt="profile"
            src={profile}
          />
        </div>

        <div className="md:rotate-90 flex md:w-[70vh] xl:w-[60vh] flex-col gap-4 md:items-center md:text-center text-xs xl:text-sm text-gray-500">
          <h2>
            I am a highly skilled web developer with a passion for creating
            dynamic, responsive, and intuitive web app, All my work are done
            with heart.
          </h2>
          <div className="flex gap-4">
            <a
              href={personalinfo.cvLinkDownload}
              className="font-Montserrat font-medium border-0 border-b-2 border-b-gray-500 hover:scale-105"
            >
              Download CV
            </a>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-30}
              className="w-fit flex gap-2 font-Montserrat font-medium items-center justify-center text-primary-500 border-0 border-b-2 border-b-primary-500 hover:scale-105"
            >
              Know me more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
