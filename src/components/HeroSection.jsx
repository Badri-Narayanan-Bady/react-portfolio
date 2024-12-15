import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
    id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 bg-neutral-950 text-white"
      initial={{ opacity: 0, x: -100 }} // Initial state
      whileInView={{ opacity: 1, x: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of the section is visible
      transition={{ duration: 1.1 }} // Duration of the animation
    >
      {/* Left Section - Description */}
      <motion.div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Hi! I'm Badri.
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          I’m a passionate developer and tech enthusiast specializing in web
          development, relational database management, artificial intelligence,
          and IoT projects. With a deep interest in building smart and intuitive
          applications, I strive to merge creativity with technology to deliver
          impactful solutions. I've got a knack for programming and am versed
          with languages like C++, Python, JavaScript, and PHP. Welcome to my
          portfolio website!
        </p>
        <div className="flex space-x-4 mt-6">
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-6 py-3 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            See My Projects
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div className="flex-1 mt-12 md:mt-0 md:ml-8">
        <img
          src="/images/20240428_125628.jpg"
          alt="Badri's profile"
          className="w-95 h-95 md:w-90 md:h-90 rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
