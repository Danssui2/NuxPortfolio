import React from "react";
import Header from "../components/Header";
import profile from "../assets/images/female1.png";
import ProgressBar from "../components/ProgressBar";
import ResumeCard from "../components/ResumeCard";
import { BiDownload } from "react-icons/bi";
import { personalinfo } from "../utils/constants"

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
            I am an experienced web developer with a passion for building user-friendly and scalable web applications. With eight years of experience in the industry, I have worked with clients from various industries, including healthcare, e-commerce, and education. My expertise includes front-end development, back-end development, database management, and server administration.
          </p>

          {/** Skills */}
          <div className="flex flex-col gap-y-2 mt-5">
            <ProgressBar skill="HTML" percentage="95" />
            <ProgressBar skill="CSS" percentage="80" />
            <ProgressBar skill="JavaScript" percentage="90" />
            <ProgressBar skill="Node.js" percentage="85" />
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
                title="Participated in coding bootcamps focused"
                description="participated in coding bootcamps focused on full-stack web development. These bootcamps would have covered topics such as server-side programming, database management, and web application deployment."
                year="2017 - 2019"
              />
              <ResumeCard
                title="Bachelor's Degree in Graphic Design"
                description="holds a Bachelor's Degree in Graphic Design from XYZ University, which typically takes 4 years to complete. During their time in the program, they would have studied a variety of topics related to design, including color theory, typography, layout design, and digital media design"
                year="2018 - 2022"
              />
              <ResumeCard
                title="Completed courses in UI/UX design and branding"
                description="strong foundation in graphic design, with a focus on both traditional and digital media design, as well as expertise in key software programs and other areas of design such as UI/UX and branding."
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
                title="SEO Manager for many Clients"
                description="Implemented SEO best practices in website development to improve search engine rankings for clients"
                year="2019 - Now"
              />
              <ResumeCard
                title="Graphic designer for XYZ Agency"
                description="Worked as a graphic designer for XYZ Agency for 2 years, creating branding and marketing materials for clients in various industries"
                year="2020 - 2022"
              />
              <ResumeCard
                title="Freelanced for years"
                description="Freelanced as a web developer for the past 3 years, building custom websites for clients using HTML, CSS, JavaScript, and other technologies"
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
