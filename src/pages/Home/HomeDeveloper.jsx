import React, { useEffect } from "react";
import Typed from "typed.js";

import SocialMedia from "../../components/SocialMedia";
import profile from "../../assets/images/avatar-home-developer.png";
import { BsArrowDown } from "react-icons/bs";
import { personalinfo } from "../../utils/constants";

export default function HomeDeveloper() {
  useEffect(() => {
    const typed = new Typed(".typed-animation", {
      strings: [
        "Web Dev",
        "Mobile Dev",
        "Dev Ops",
        "Designer",
      ],
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
   /* This is a React component that represents the home page of a developer's portfolio website. It
   includes a section with a hero image and a grid layout with information about the developer,
   including their name, skills, and experience. The component also includes a social media section
   and a button to download the developer's CV. The `Typed` library is used to create a typing
   animation for the developer's skills. */
    <section id="hero" className="text-gray-600 mt-20 md:mt-0 mb-10 md:mb-0">
      <div className="flex-col grid grid-cols-4 md:grid-cols-8 lg:gap-8">
        {/* Left Side */}
        <div className="lg:flex-grow col-span-4 place-content-center flex flex-col items-start">
          <h2 className="title-font mb-4 lg:text-5xl text-3xl">
            <span className="text-primary-500">{"<h1>"}</span>
            <span className="text-gray-700 dark:text-gray-200">Hello</span>
            <span className="text-primary-500">{"</h1>"}</span>
            <br />
            <span className="text-gray-700 dark:text-gray-200">
              I'm, Dior Nux a
            </span>
            <br />
            <div>
              <span className="text-primary-500">{"<b>"}</span>
              <span className="typed-animation text-gray-700 dark:text-gray-200">
                Dior Nux
              </span>
              <span className="text-primary-500">{"</b>"}</span>
            </div>
          </h2>
          <div className="text-left">
            <div className="mb-2">
              <code className="text-gray-500 dark:text-gray-400">
                const Me = [ Multitalent developer, Fast Worker ];
              </code>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:items-center">
              <code className="text-gray-500 dark:text-gray-400">
                const My_Cv = () =&gt;
              </code>
              <a className="mr-3" href={personalinfo.cvLinkDownload}>
                <button className="text-gray-200 bg-primary-500 py-2 px-6 hover:brightness-110 text-center">
                  Download CV
                </button>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-4 mb-10 lg:mb-0 md:items-center">
              <code className="text-gray-500 dark:text-gray-400">
                const Find_Me = () =&gt;
              </code>
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:col-span-3 col-span-2 bg-gradient-to-bl from-primary-600 to-primary-500">
          <img
            className="object-cover md:h-screen object-center rounded grayscale"
            alt="profile"
            src={profile}
          />
        </div>

        <div className="flex flex-col h-full w-full px-4 justify-self-end justify-center gap-10">
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              1K
            </h2>
            <p className="dark:text-gray-200 font-semibold">Project</p>
          </div>
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              100k+
            </h2>
            <p className="dark:text-gray-200 font-semibold">Lines Code</p>
          </div>
          <div>
            <h2 className="title-font font-semibold text-3xl text-primary-500 hover:scale-110 transition-transform">
              6Yrs
            </h2>
            <p className="dark:text-gray-200 font-semibold">Experience</p>
          </div>
        </div>
      </div>

      <div className="md:absolute text-gray-600 dark:text-gray-300 bottom-10 left-20 flex items-center mt-4 md:mt-0 gap-5">
        <BsArrowDown className="animate-bounce mt-2" />{" "}
        Scroll Down
      </div>
    </section>
  );
}