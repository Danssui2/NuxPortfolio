import React from "react";

function TestiCard({ comment, profile, name }) {
  return (
    <div className="flex transition-transform hover:scale-105 items-center justify-center">
      <div className="w-full lg:flex flex-col justify-center lg:h-[18rem] px-5 pt-5 pb-10 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100/20 border border-px border-primary-500/30 dark:from-gray-900/50 dark:text-gray-50">
        <div className="w-20 flex justify-center pt-1 pb-5 mx-auto -mt-16 text-center">
          <img
            alt="profil"
            src={profile}
            className="border-2 block border-primary-500 object-cover rounded-full h-20 w-20"
          />
        </div>

        <div className="w-full mb-10">
          <div className="h-3 text-3xl leading-tight text-left text-primary-500">
            “
          </div>
          <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
            {comment}
          </p>
          <div className="h-3 -mt-3 text-3xl leading-tight text-right text-primary-500">
            ”
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold text-center text-primary-500 dark:text-primary-500 text-md">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
