import React from "react";

function TestiCard({ comment, profile, name }) {
  return (
    <div className="flex items-center justify-center">
      <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-6 p-6 text-gray-800 bg-gradient-to-b from-gray-100 to-gray-100/20 border border-px border-primary-500/30 hover:border-primary-500/80 hover:scale-105 transition-all hover:mx-4 dark:from-gray-900/50 dark:text-gray-50">

        <div className="flex h-[10rem] justify-center md:w-full w-2/3">
          <img
            alt="profil"
            src={profile}
            className="object-cover object-center"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center">
          <div className="w-full mb-6">
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
    </div>
  );
}

export default TestiCard;
