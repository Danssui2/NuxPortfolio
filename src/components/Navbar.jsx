import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const anim = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, height: 0, zIndex: 0 },
  };

  const changeBG = () => {
    window.scrollY > 800 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => {
      window.removeEventListener("scroll", changeBG);
    };
  }, []);

  return (
    <>
      <header
        id="navbar"
        className={`text-gray-600 body-font fixed w-[100%] top-0 left-0 z-50
            ${isScrolled ? "bg-gray-50 dark:bg-gray-800" : "bg-transparent"}
          `}
      >
        <div className="flex lg:px-[86px] md:px-[56px] pl-[46px] pr-[20px] py-5 items-center justify-between">
 
          <a className="flex title-font font-medium items-center mr-12 text-gray-900">
            <span className="text-xl text-primary-500">Nux</span>
          </a>

          <nav className="md:flex hidden items-center text-gray-700 dark:text-gray-300 justify-center">
            <Link
              to="hero"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              Home
            </Link>
            <Link
              to="about"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              About
            </Link>
            <Link
              to="service"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              Services
            </Link>
            <Link
              to="project"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              Projects
            </Link>
            <Link
              to="blog"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              Blog
            </Link>
            <Link
              to="contact"
              activeClass="text-primary-500"
              spy={true}
              smooth={true}
              duration={500}
              className="mr-5 font-Montserrat font-medium hover:text-primary-500 dark:hover:text-primary-500"
              offset={-120}
            >
              Contact
            </Link>
          </nav>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-150}
            className="text-center hidden md:block font-Montserrat font-medium bg-primary-500 hover:scale-105 hover:brightness-110 text-sm text-white px-3 py-2"
          >
            Hire me
          </Link>

          <div className="flex gap-4 md:hidden items-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-150}
              className="text-center font-Montserrat font-medium bg-primary-500 hover:scale-105 hover:brightness-110 text-sm text-white px-3 py-2"
            >
              Hire me
            </Link>
            <button
              className="md:hidden text-gray-700 dark:text-gray-200 text-2xl hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/** scroll bar */}
        <motion.div
          className="bg-primary-500 h-[1px]"
          initial={{ scaleX: 0 }}
          style={{ scaleX: scrollYProgress }}
        ></motion.div>

        <div className="fixed bottom-6 right-10 z-40">
          <DarkModeSwitch />
        </div>
      </header>

      {/* Nav Mobile*/}
      <motion.div
        variants={anim}
        animate={isOpen ? "open" : "closed"}
        className="w-screen h-screen fixed z-30"
      >
        <nav
          className={`w-full ${
            isOpen ? "h-screen" : "h-0"
          } bg-slate-900/95 flex flex-col items-center font-semibold text-gray-300 text-2xl justify-center gap-4`}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="hero"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="about"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="service"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="project"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            Projects
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="blog"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            Blog
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="contact"
            activeClass="text-primary-500"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-5 font-Montserrat hover:text-primary-500 dark:hover:text-primary-500"
            offset={-120}
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
