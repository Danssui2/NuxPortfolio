import React from "react";
import { IoMdClose } from "react-icons/io";

function Modal(props) {
  return (
    <div className="fixed w-screen h-full flex justify-center items-center z-50 modal-animation">
      <div className="w-full md:w-2/3 h-full overflow-y-scroll py-6 bg-gray-100 dark:bg-gray-800 flex items-center flex-col relative z-10">
        <button
          onClick={props.onClose}
          className="mb-4 font-bold text-3xl text-gray-700 dark:text-gray-300"
        >
          <IoMdClose />
        </button>
        <h2 className="text-xl mb-6 text-gray-700 dark:text-gray-300">
          {props.title}
        </h2>
        <div className="px-14">{props.children}</div>
      </div>
      <div
        onClick={props.onClose}
        className="absolute w-full h-full inset-0 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm"
      ></div>
    </div>
  );
}

export default Modal;
