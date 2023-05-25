import React from "react";
import Header from "../components/Header";
import ServicesCard from "../components/ServicesCard";
import { FiBox } from "react-icons/fi";
import { HiOutlineCamera } from 'react-icons/hi'
import { MdComputer, MdOutlinePalette} from "react-icons/md";

function Services() {
/* This code is defining a React functional component called "Services" that renders a section with
an id of "service" and a class name of "text-gray-600 section-p". Inside this section, there is
a Header component with mainText set to "WHAT I DO" and backText set to "SERVICES". Below the
header, there is a div with a class name of "flex pt-4 flex-wrap flex-col w-full md:grid
grid-cols-2 lg:grid-cols-4 justify-center max-md:items-center gap-4 md:gap-6 xl:gap-8". Inside
this div, there are four instances of the ServicesCard component, each with a different title,
description, and icon. These cards represent the different services that the developer offers,
including UI/UX design, web design, mobile development, and web development. */

  return (
    <section
      data-aos="fade-up"
      id="service"
      className="text-gray-600 section-p"
    >
      <Header mainText="WHAT I DO" backText="SERVICES" align="center" />

      <div className="flex pt-4 flex-wrap flex-col w-full md:grid grid-cols-2 lg:grid-cols-4 justify-center max-md:items-center gap-4 md:gap-6 xl:gap-8">
        <ServicesCard
          title="Web Developer"
          description="With a focus on clean code and optimized performance, I am dedicated to delivering high-quality websites that enhance user experience."
          icon={<MdComputer />}
        />
        <ServicesCard
          title="Designer"
          description="With expertise in graphic design, I have the ability to translate concepts into visually captivating designs."
          icon={<MdOutlinePalette />}
        />
        <ServicesCard
          title="Photographer"
          description="As a Photographer I collaborated with clients to understand their vision and goals to delivering high-quality photographs."
          icon={<HiOutlineCamera />}
        />
        <ServicesCard
          title="Model"
          description="As a Model I always maintained professionalism, punctuality, and adaptability in fast-paced and demanding modeling environments."
          icon={<FiBox />}
        />
      </div>
    </section>
  );
}

export default Services;
