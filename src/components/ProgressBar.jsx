import React from "react";

function ProgressBar({ skill, percentage }) {
  return (
    <div data-aos="fade-left" className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-primary-600 dark:text-gray-200">
          {skill}
        </span>
        <span className="text-sm font-medium text-primary-400 dark:text-gray-200">
          {percentage}%
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="h-2.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
