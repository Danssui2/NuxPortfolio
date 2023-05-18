import React from "react";

function ResumeCard({ title, description, year }) {
  return (
    <div data-aos="fade-down" className="flex max-w-4xl">
      <div className="h-6 w-12 max-sm:w-12 flex items-center rounded-l-xl pl-1 bg-gray-100 dark:bg-gray-800">
        <div className="w-3 h-3 rounded-full bg-primary-500"></div>
      </div>
      <div className="w-full group hover:scale-[102%] transition-all p-10 flex flex-col bg-gradient-to-bl border border-px border-black/10 from-gray-100 to-gray-100/10 dark:from-gray-900/50 dark:hover:from-primary-400 dark:hover:to-primary-500 hover:from-primary-400 hover:to-primary-500">
        <div className="flex flex-col items-start">
          <div className="bg-primary-500 text-slate-100 p-2 text-sm font-semibold mb-2">
            {year}
          </div>
          <h3 className="text-xl font-semibold text-left text-gray-700 group-hover:text-white dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-500 text-sm text-left group-hover:text-gray-100 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
