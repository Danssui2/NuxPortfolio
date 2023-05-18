import React from "react";

function ServicesCard({ title, description, icon }) {
  return (
    <div className="flex w-full" data-aos="fade-left">
      <div className="w-full group hover:scale-105 py-16 transition-all p-6 flex flex-col bg-gradient-to-bl border border-px border-black/10 from-gray-100 to-gray-100/10 dark:from-gray-900/70 dark:hover:from-primary-600 dark:hover:to-primary-400 hover:from-primary-600 hover:to-primary-400">
        <div className="flex w-12 h-12 bg-gradient-to-bl from-primary-600 to-primary-500 group-hover:from-white group-hover:to-white text-2xl justify-center items-center text-white group-hover:text-primary-500 font-black">
          {icon}
        </div>
        <div className="flex flex-col gap-1 items-start mt-4">
          <h3 className="text-xl font-semibold text-left text-gray-700 group-hover:text-white dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 text-sm text-left group-hover:text-gray-100 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
