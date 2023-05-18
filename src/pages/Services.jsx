import React from "react";
import Header from "../components/Header";
import ServicesCard from "../components/ServicesCard";
import { FiBox, FiSmartphone } from "react-icons/fi";
import { MdComputer, MdOutlinePalette } from "react-icons/md";

function Services() {
  return (
    <section
      data-aos="fade-up"
      id="service"
      className="text-gray-600 section-p"
    >
      <Header mainText="WHAT I DO" backText="SERVICES" align="center" />

      <div className="flex pt-4 flex-wrap flex-col w-full md:grid grid-cols-2 lg:grid-cols-4 justify-center max-md:items-center gap-4 md:gap-6 xl:gap-8">
        <ServicesCard
          title="UI/UX Designer"
          description="As a UI designer, I specialize in creating beautiful, intuitive, and user-friendly interfaces for websites."
          icon={<MdOutlinePalette />}
        />
        <ServicesCard
          title="Web Designer"
          description="As a web designer, I specialize in creating visually stunning and responsive websites that are optimized for performance."
          icon={<FiBox />}
        />
        <ServicesCard
          title="Mobile Developer"
          description="As a mobile designer, I specialize in creating engaging and responsive mobile applications for iOS and Android devices."
          icon={<FiSmartphone />}
        />
        <ServicesCard
          title="Web Developer"
          description="As a web developer, I specialize in creating dynamic, responsive, and user-friendly web applications."
          icon={<MdComputer />}
        />
      </div>
    </section>
  );
}

export default Services;
