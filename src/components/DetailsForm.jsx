import React from "react";

import { BsTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { FaGlobeEurope } from 'react-icons/fa'

function DetailsForm() {
  return (
    <div data-aos="fade-left" className="pt-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-center gap-6 mb-4">
          <div>
            <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Address
            </h2>
            <div className="text-lg text-gray-900 dark:text-gray-100 text-center">
              <p>3rd Floor, Block E No.12,</p>
              <p>120 Rue Joseph Junck ST,</p>
              <p>Ettelburg SA</p>
            </div>
          </div>
          <div>
            <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Contact
            </h2>
            <div className="text-lg flex flex-col items-center text-gray-900 dark:text-gray-100 text-center mb-4">
              <p className="flex items-center gap-3"><BsTelephoneFill/> (040) 123 456 789</p>
              <p className="flex items-center gap-3"><IoMdMail/> diornux@nux.com</p>
              <a href="https://nux-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                <p className="flex items-center gap-3"><FaGlobeEurope/> nux-portfolio.vercel.app</p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Send me words
          </h2>
          <div className="flex w-[18rem] lg:w-[30rem] flex-col gap-4 max-w-2xl"> 
            <input className="bg-gray-200 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-gray-200 p-4 w-full" type="text" placeholder="Name"/>
            <input className="bg-gray-200 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-gray-200 p-4 w-full" type="text" placeholder="Email"/>
            <textarea className="bg-gray-200 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-gray-200 p-4 w-full" placeholder="Tell us your story" rows="3"></textarea>
            <button onClick={() => window.location = "mailto:youremail@gmail.com"} className="bg-primary-500 px-6 py-3 text-white font-medium md:w-fit">Send</button>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default DetailsForm;
