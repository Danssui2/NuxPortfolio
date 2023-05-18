import React from "react";
import Header from "../components/Header";
import TestiCard from "../components/TestiCard";
import Trusted from "../components/Trusted";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <div data-aos="fade-up" id="project" className="flex flex-col items-center section-p">
      <Header
        mainText="WHAT PEOPLE SAY"
        backText="TESTIMONIALS"
        align="center"
      />

      {/* <div className="flex w-full flex-col md:flex-row justify-center pt-10 max-sm:gap-y-8 max-md:hidden">
        <TestiCard
          profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
          name="Elise Xi"
        />
        <TestiCard
          profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
          name="John Douch"
        />
        <TestiCard
          profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
          name="Linus Robert"
        />
      </div> */}

      <div className="w-screen max-w-[100rem] lg:px-[86px] md:px-[56px] px-[46px]">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-8 gap-y-14 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
              name="Elise Xi"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
              name="Elise Xi"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              comment="I was impressed with the quality of the work done on this personal project. The user interface was easy to navigate and the overall design was visually appealing."
              name="Elise Xi"
            />
          </div>
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-8 gap-y-14 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
              name="John Douch"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
              name="John Douch"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="I was very pleased with the final product of this personal project. The freelancer was easy to work with and was able to incorporate all of my ideas and preferences into the design."
              name="John Douch"
            />
          </div>
          <div className="pt-10 pb-10 flex flex-col md:flex-row gap-8 gap-y-14 md:gap-y-0 justify-center">
            <TestiCard
              profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
              name="Linus Robert"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
              name="Linus Robert"
            />
            <TestiCard
              profile="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              comment="The freelancer did a great job on this personal project, but I had a few minor suggestions for improvement. Overall, I was happy with the result."
              name="Linus Robert"
            />
          </div>
        </Carousel>
      </div>

      <Trusted />
    </div>
  );
}

export default Testimonials;
