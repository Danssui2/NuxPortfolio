import React from "react";

function Header({ mainText, backText, align }) {
  return (
    <div>
      {align == "center" ? (
        <div className="flex flex-col mb-4 w-full items-center">
          <h2 className="text-primary-500 font-semibold">{backText}</h2>
          <h1 className="text-4xl text-center font-bold text-gray-700 dark:text-gray-200">
            {mainText}
          </h1>
          <span className="border-b-primary-500 border-b-2 w-12 mt-1"></span>
        </div>
      ) : (
        <div className="flex flex-col mb-4">
          <h2 className="text-primary-500 font-semibold">{backText}</h2>
          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200">
            {mainText}
          </h1>
          <span className="border-b-primary-500 border-b-2 w-12 mt-1"></span>
        </div>
      )}
    </div>
  );
}

export default Header;
