import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function BlogCard({ link, img, date, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        data-aos="fade-up"
        href={link}
        className="group h-48 md:h-64 lg:h-80 xl:h-96 flex flex-col bg-transparent shadow-lg overflow-hidden relative"
      >
        <img
          src={img}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />

        <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div className="relative p-4 mt-auto">
          <span className="block text-gray-200 text-sm">{date}</span>
          <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
            {title}
          </h2>
          <span className="text-primary-500 font-semibold">Read more</span>
        </div>
      </div>

      {isOpen
        ? createPortal(
            <Modal title={""} onClose={() => setIsOpen(false)}>
              <div className="flex flex-col md:flex-row gap-8">
                <img src={img} alt="" className="md:w-1/2"/>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl  text-gray-800 dark:text-gray-200">{title}</h1>
                  <p>{date}</p>
                  <p>{desc}</p>
                  <a href={link}>
                    <button className="bg-primary-500 text-gray-50 p-3">
                      Read Full
                    </button>
                  </a>
                </div>
              </div>
            </Modal>,
            document.getElementById("index")
          )
        : null}
    </>
  );
}

export default BlogCard;
