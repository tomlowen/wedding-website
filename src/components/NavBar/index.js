import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar({ content }) {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
      },
    },
    closed: {
      opacity: 0.85,
      x: "-100%",
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <Router>
      <nav className="sticky top-0 z-40 flex justify-between bg-gray-900 text-white">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <div onClick={() => setNavBarVisible(!navBarVisible)}>
            <div className="navbar-burger self-center mr-12"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="flex mr-6 items-center">
            <div className="animate-pulse border border-pink-500 border-solid rounded-md p-2">
              <HashLink smooth to={`/#rsvp`}>
                RSVP
              </HashLink>
            </div>
          </div>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {content.map((section) => (
              <li>
                <HashLink smooth to={`/#${section.title}`} className="navLink">
                  {section.title}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <motion.div
        animate={navBarVisible ? "open" : "closed"}
        variants={variants}
        onClick={() => setNavBarVisible(!navBarVisible)}
        className={`sticky top-20 z-30 flex justify-between bg-gray-700 text-white min-h-screen w-9/12 max-w-xs`}
      >
        <div className="px-5 xl:px-12 py-10">
          <ul className="flex-col px-4 font-semibold font-heading space-y-5">
            {content.map((section) => (
              <li>
                <HashLink smooth to={`/#${section.title}`} className="py-5">
                  {section.title}
                </HashLink>
              </li>
            ))}
            <li>
              <HashLink smooth to={`/#rsvp`} className="">
                RSVP
              </HashLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </Router>
  );
}

export default NavBar;
