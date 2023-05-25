import React, { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

function DarkModeSwitch() {
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
    switchMode();
  }, []);

  return (
    <div
      onClick={switchButton}
      className="text-xl dark:text-gray-300 text-gray-600 hover:scale-110 cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-full p-2"
    >
      {mode ? <HiMoon /> : <HiSun />}
    </div>
  );
}

export default DarkModeSwitch;
