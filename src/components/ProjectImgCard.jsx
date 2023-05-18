import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

function ProjectImgCard({ img, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        onClick={() => setIsOpen(true)}
        className="flex group overflow-hidden relative mb-4"
      >
        <img
          src={img}
          loading="lazy"
          alt=""
          className="flex w-full object-cover object-center group-hover:scale-110 transition duration-200"
        />
        <h2 className="absolute bg-primary-500 p-3 bottom-5 left-5 text-gray-100">
          {title}
        </h2>
      </div>

      {isOpen
        ? createPortal(
            <Modal title={""} onClose={() => setIsOpen(false)}>
              <div className="flex md:flex-row flex-col gap-8">
                <img src={img} alt="" />
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl text-gray-800 dark:text-gray-200">{title}</h1>
                  <p>{desc}</p>
                  <a href={"#"}>
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

export default ProjectImgCard;
