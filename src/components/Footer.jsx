import React from "react";
import SocialMedia from "./SocialMedia"

function Footer() {
  return (
    <footer className="text-gray-600 w-screen">
      <div className="w-full py-8 mx-auto md:flex justify-around items-center">
        <div className="md:flex items-center justify-center gap-4">
          <a href="#" className="flex font-medium items-center justify-center text-gray-900">
            <span className="text-xl mb-2 text-primary-500">Nux</span>
          </a>

          <p className="text-gray-500 px-4 md:border-l-2 h-8 flex items-center justify-center border-gray-500">
            <span>2023 Nux — </span>
            <a
              href="https://twitter.com/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @nux
            </a>
          </p>
        </div>

        <div className="text-gray-400 text-sm text-center py-4">
          © 2023 - Present Nux All rights reserved.
        </div>

        <div className="flex justify-center md:block">
          <SocialMedia/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
