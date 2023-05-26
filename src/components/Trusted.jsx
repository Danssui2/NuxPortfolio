import React from "react";

import Github from "../assets/logos/Github.svg";
import Google from "../assets/logos/Google.svg";
import Microsoft from "../assets/logos/Microsoft.svg";
import Slack from "../assets/logos/Slack.svg";

function Trusted() {
  return (
    <div data-aos="fade-up" className="w-full max-w-[100rem] py-8 mt-6">
      <h2 className="text-gray-600 dark:text-gray-300 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        Trusted by
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:content-evenly place-items-center gap-4 px-20 py-6 grayscale">
        <img className="lg:scale-110 xl:scale-125" src={Github} alt="" />
        <img className="lg:scale-110 xl:scale-125" src={Google} alt="" />
        <img className="lg:scale-110 xl:scale-125" src={Microsoft} alt="" />
        <img className="lg:scale-110 xl:scale-125" src={Slack} alt="" />
      </div>
    </div>
  );
}

export default Trusted;
