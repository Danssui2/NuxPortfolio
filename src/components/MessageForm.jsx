import React from "react";
import { FiSend } from "react-icons/fi";

function MassageForm() {
  return (
    <div data-aos="fade-left" className="pt-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-10">
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Get in touch
          </h2>
          <p className="max-w-screen-md text-gray-600 dark:text-gray-400 text-center mx-auto">
            With 5 years of experience and a proven track record of success, I am confident that I can deliver high-quality results that exceed your expectations. Whether you need a one-time project or ongoing support, I am here to help. Contact me today to learn more about my services and how I can help you achieve your goals.
          </p>
        </div>

        <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto text-gray-800 dark:text-gray-300">
          <div>
            <label
              forname="first-name"
              className="inline-block text-sm sm:text-base mb-2"
            >
              First name*
            </label>
            <input
              name="first-name"
              className="w-full bg-transparent border border-gray-500 focus:ring ring-primary-500  outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div>
            <label
              forname="last-name"
              className="inline-block text-sm sm:text-base mb-2"
            >
              Last name*
            </label>
            <input
              name="last-name"
              className="w-full bg-transparent border border-gray-500 focus:ring ring-primary-500  outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              forname="email"
              className="inline-block text-sm sm:text-base mb-2"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full bg-transparent border border-gray-500 focus:ring ring-primary-500  outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              forname="subject"
              className="inline-block text-sm sm:text-base mb-2"
            >
              Subject*
            </label>
            <input
              name="subject"
              className="w-full bg-transparent border border-gray-500 focus:ring ring-primary-500  outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              forname="message"
              className="inline-block text-sm sm:text-base mb-2"
            >
              Message*
            </label>
            <textarea
              name="message"
              className="w-full h-48 bg-transparent border border-gray-500 focus:ring ring-primary-500  outline-none transition duration-100 px-3 py-2"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-between items-center">
            <button className="bg-primary-500 hover:brightness-105 text-white text-center outline-none transition duration-100 px-6 py-2 flex items-center gap-2">
              <FiSend /> Send
            </button>

            <p className="text-gray-500 text-sm">*Required</p>
          </div>

          <p className="text-gray-400 text-xs">
            Don't be shy to contact me anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

export default MassageForm;
