import React from "react";

import profile from "../assets/images/collage.png";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import ResumeCard from "../components/ResumeCard";

import { BiDownload } from "react-icons/bi";
import { personalinfo } from "../utils/constants"

/* The above code is a React component that renders a section with information about the
developer's background, education, and experience. It includes a profile picture, a brief
introduction, a list of skills with progress bars, and a button to download the developer's CV.
The section also includes two grids, one for education and one for experience, each with a list
of cards that display relevant information. The component uses various CSS classes and
animations to create a visually appealing layout. */

function About() {
  return (
    <section
      data-aos="fade-up"
      id="about"
      className="text-gray-600 section-color-sec flex flex-col py-16 pt-20 items-center"
    >
      <div className="grid md:grid-cols-2 max-w-4xl gap-8">
        {/** Picture on this section only show on medium screen */}
        <div
          data-aos="fade-right"
          className="max-w-sm -lg overflow-hidden hidden md:block"
        >
          <img
            alt=""
            className="object-cover object-center h-full w-full"
            src={profile}
          />
        </div>

        <div data-aos="fade-left" className="flex flex-col">
          <Header mainText={"About Me"} backText={"My Journey"} />

          {/** Story */}
          <p data-aos="fade-left" className="text-gray-600 dark:text-gray-400">
            I am a seasoned multi-profession freelancer with a diverse skill set and a passion for delivering exceptional results. With a strong background in various fields, I offer a unique combination of expertise and versatility that enables me to excel in multiple roles. As a freelance professional, I have successfully taken on a range of projects across different industries.
          </p>

          {/** Skills */}
          <div className="flex flex-col gap-y-2 mt-5">
            <ProgressBar skill="Web Developer" percentage="95" />
            <ProgressBar skill="Designer" percentage="90" />
            <ProgressBar skill="Photographer" percentage="80" />
            <ProgressBar skill="Model" percentage="85" />
          </div>

          <a href={personalinfo.cvLinkDownload}>
            <button className="bg-primary-500 flex items-center gap-2 hover:brightness-105 hover:scale-105 mt-8 p-2 px-4 pr-6 text-white w-fit">
              <BiDownload />
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-14 w-full">
        <div
          data-aos="fade-right"
          className="flex justify-center flex-col gap-6"
        >
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            My Education
          </h2>

          <div className="flex max-sm:-translate-x-4">
            <div className="h-full w-7 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-t-xl rounded-b-xl translate-x-5 max-sm:translate-x-4 py-2">
              <div className="bg-gradient-to-b from-primary-400 to-primary-600 w-2 h-full rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-6">
              <ResumeCard
                title="Completed courses in web development"
                description="completed courses in web development, including HTML, CSS, JavaScript, and React. These courses would have provided them with a solid foundation in front-end web development technologies."
                year="2017 - 2018"
              />
              <ResumeCard
                title="Bachelor of Arts in Photography"
                description="During my time at ABC University, I pursued a Bachelor of Arts degree in Photography, immersing myself in a comprehensive curriculum that fostered both technical expertise and creative expression."
                year="2017 - 2019"
              />
              <ResumeCard
                title="Bachelor's Degree in Graphic Design"
                description="holds a Bachelor's Degree in Graphic Design from XYZ University, which typically takes 4 years to complete. During their time in the program, they would have studied a variety of topics related to design, including color theory, typography, layout design, and digital media design"
                year="2018 - 2022"
              />
              <ResumeCard
                title="Modeling Training and Workshops"
                description="I have undergone comprehensive modeling training and workshops at a reputable modeling school, where I honed my skills and acquired the necessary knowledge to excel in the industry."
                year="2022 - 2023"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col gap-6">
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            My Experience
          </h2>

          <div className="flex max-sm:-translate-x-4">
            <div className="h-full w-7 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-t-xl rounded-b-xl translate-x-5 max-sm:translate-x-4 py-2">
              <div className="bg-gradient-to-b from-primary-400 to-primary-600 w-2 h-full rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-6">
              <ResumeCard
                title="Junior web developer at XYZ Company"
                description="Worked as a junior web developer at XYZ Company for 2 years, working on both front-end and back-end development projects"
                year="2018 - 2020"
              />
              <ResumeCard
                title="Photographer at XYZ Company"
                description="Captured a wide range of subjects, including portraits, events, landscapes, and products, demonstrating a keen eye for composition, lighting, and storytelling."
                year="2019 - Now"
              />
              <ResumeCard
                title="Graphic designer for XYZ Agency"
                description="Worked as a graphic designer for XYZ Agency for 2 years, creating branding and marketing materials for clients in various industries"
                year="2020 - 2022"
              />
              <ResumeCard
                title="Model for XYZ brand"
                description="Posed for various photoshoots, runway shows, and commercial campaigns, showcasing versatility, confidence, and the ability to convey different emotions and styles."
                year="2020 - Now"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
