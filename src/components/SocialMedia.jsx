import React from "react";

import { socialMediaLinks } from "../utils/constants";

import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

function SocialMedia({ buttonStyle }) {
  return (
    <div className="flex gap-5 items-center">
      <a
        href={ socialMediaLinks.facebook }
        className={"text-gray-500 text-lg hover:scale-105 " + buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImFacebook />
      </a>
      <a
        href={ socialMediaLinks.instagram }
        className={"text-gray-500 text-xl hover:scale-105 " + buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a
        href={ socialMediaLinks.twitter }
        className={"text-gray-500 text-xl hover:scale-105 " + buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImTwitter />
      </a>
      <a
        href={ socialMediaLinks.linkedin }
        className={"text-gray-500 text-xl hover:scale-105 " + buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImLinkedin2 />
      </a>
    </div>
  );
}

export default SocialMedia;
