import React from "react";

import Header from "../components/Header";
import TestiCard from "../components/TestiCard";
import Trusted from "../components/Trusted";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials() {
/* This is a React component that displays a section with testimonials from clients. It includes a
header with the main text "WHAT PEOPLE SAY" and the back text "TESTIMONIALS", a carousel that
displays TestiCard components with comments and names from clients, and a Trusted component. The
section has a fade-up animation effect applied to it. The component also includes responsive
design for mobile devices. */

  return (
    <div data-aos="fade-up" id="project" className="flex flex-col items-center section-p">
      <Header
        mainText="WHAT MY CLIENT SAY"
        backText="TESTIMONIALS"
        align="center"
      />

      <div className="w-screen hidden md:block max-w-[100rem] lg:px-[86px] md:px-[56px] px-[10%]">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
              name="Elise Xi"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              comment="I am thoroughly impressed with the developer's skills and professionalism. They delivered a high-quality product and demonstrated excellent problem-solving abilities."
              name="Jake Ronson"
            />
          </div>
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
              name="John Douch"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              comment="The model I worked with was incredibly professional and versatile. They brought our vision to life effortlessly and showcased various emotions and poses with ease."
              name="Andrea Don"
            />
          </div>
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
              name="Linus Robert"
            />
           <TestiCard
              profile="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
              comment="The photographer's attention to detail and ability to capture moments that evoke emotion is remarkable. Working with them was a delightful experience."
              name="Eura Collins"
            />
          </div>
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="w-screen md:hidden max-w-[100rem] lg:px-[86px] md:px-[56px] px-[10%]">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
              name="Elise Xi"
            />
          </div>
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
              name="John Douch"
            />
          </div>
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
              name="Linus Robert"
            />
          </div>
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              comment="I am thoroughly impressed with the developer's skills and professionalism. They delivered a high-quality product and demonstrated excellent problem-solving abilities."
              name="Francis Loute"
            />
          </div>
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              comment="The model I worked with was incredibly professional and versatile. They brought our vision to life effortlessly and showcased various emotions and poses with ease."
              name="Andrea Don"
            />
          </div>
          <div className="px-2 py-10 flex flex-col md:flex-row gap-6 gap-y-8 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              comment="The photographer's attention to detail and ability to capture moments that evoke emotion is remarkable. Working with them was a delightful experience."
              name="Meilin Yan"
            />
          </div>
        </Carousel>
      </div>

      <Trusted />
    </div>
  );
}

export default Testimonials;
