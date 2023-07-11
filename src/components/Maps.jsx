import React from "react";

function Maps() {
  return (
    <div
      data-aos="fade-right"
      className="h-full max-md:h-64 bg-gray-300 dark:bg-gray-800 overflow-hidden p-10 flex flex-row items-end justify-start relative"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82735.13575117456!2d6.05346899221719!3d49.60768695017748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548cd9df32c57%3A0x400d1d6d1056d10!2sLuksemburg!5e0!3m2!1sid!2sid!4v1688519267616!5m2!1sid!2sid"
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
