import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine scroll direction and visibility
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  // Smooth scroll function
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId); // Find the section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to section
    }
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Reserved space for the Navbar (prevents layout shifting) */}
      <div className="h-16"></div>

      {/* Navbar */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <motion.nav
          className="relative z-10 flex justify-between items-center p-4 w-full bg-neutral-950 bg-opacity-80 text-white shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex justify-between items-center">
            {/* Navigation Links */}
            <ul className="flex space-x-6">
              <li
                onClick={() => handleNavClick("hero")}
                className="hover:text-gray-400 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              >
                Home
              </li>
              <li
                onClick={() => handleNavClick("about")}
                className="hover:text-gray-400 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              >
                About
              </li>
              <li
                onClick={() => handleNavClick("projects")}
                className="hover:text-gray-400 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              >
                Projects
              </li>
              <li
                onClick={() => handleNavClick("contact")}
                className="hover:text-gray-400 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              >
                Contact
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Badri-Narayanan-Bady"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub className="w-6 h-6 text-black" />
              </a>
              <a
                href="https://www.linkedin.com/in/badri-narayanan-1ab40a27a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="w-6 h-6 text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com/badr.is_here/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram className="w-6 h-6 text-pink-600" />
              </a>
            </div>
          </div>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Navbar;
