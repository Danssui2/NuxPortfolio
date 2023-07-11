import React, { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

function DarkModeSwitch({ changeMode = "true", defaultMode = "light" }) {
  const [mode, setMode] = useState(
    localStorage.getItem("darkMode") == "false" ? true : false
  );

  const switchButton = () => {
    setMode((mode) => !mode);
    localStorage.setItem("darkMode", mode);
    switchMode();
  };

  const switchMode = () => {
    if (localStorage.getItem("darkMode") == "true") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--header-text-color", "rgb(229 231 235)")
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--header-text-color", "rgb(17 24 39)")
    }
  };

  useEffect(() => {
    if (defaultMode == "dark") {
      localStorage.setItem("darkMode", true);
    } else {
      localStorage.setItem("darkMode", false);
    }
    switchMode();
  }, []);

  return (
  <>
    { changeMode == "true" ? 
      <div
        onClick={switchButton}
        className="text-xl dark:text-gray-300 text-gray-600 hover:scale-110 cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-full p-2"
      >
        {mode ? <HiMoon /> : <HiSun />}
      </div> : null
    }
  </>
  );
}

export default DarkModeSwitch;
