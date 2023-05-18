import React from "react";

function Maps() {
  return (
    <div
      data-aos="fade-right"
      className="h-full max-md:h-64 bg-gray-300 dark:bg-gray-800 overflow-hidden p-10 flex flex-row items-end justify-start relative"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.5484611164575!2d6.1177224172844!3d49.60626396380758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795492a2744c0fd%3A0x5cf9ad6ef393e8fb!2sRte%20d&#39;Esch%2C%201117%20Hollerich%20Luxembourg%2C%20Luksemburg!5e0!3m2!1sid!2sid!4v1681617726759!5m2!1sid!2sid"
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
