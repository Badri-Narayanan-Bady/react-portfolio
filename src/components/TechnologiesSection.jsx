import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaJsSquare, FaDatabase } from "react-icons/fa"; // Importing icons
import { SiCplusplus, SiTailwindcss, SiDjango, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

const TechnologiesSection = () => {
  return (
    <motion.section
      id="technologies"
      className="min-h-screen bg-neutral-950 text-white px-8 py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Technologies & Skills
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mt-4">
          I’ve worked with a diverse range of programming languages, frameworks, and tools to build full-stack applications and solve complex problems. Below is a showcase of some of the technologies I’ve used extensively in my projects.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 text-center">
          {/* React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 w-16 h-16" />
            <span className="mt-2">React</span>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center">
            <FaPython className="text-yellow-400 w-16 h-16" />
            <span className="mt-2">Python</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-yellow-500 w-16 h-16" />
            <span className="mt-2">JavaScript</span>
          </div>

          {/* C++ */}
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-500 w-16 h-16" />
            <span className="mt-2">C++</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-teal-400 w-16 h-16" />
            <span className="mt-2">Tailwind CSS</span>
          </div>

          {/* Django */}
          <div className="flex flex-col items-center">
            <SiDjango className="text-green-500 w-16 h-16" />
            <span className="mt-2">Django</span>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600 w-16 h-16" />
            <span className="mt-2">MySQL</span>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-orange-500 w-16 h-16" />
            <span className="mt-2">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center">
            <SiCss3 className="text-blue-500 w-16 h-16" />
            <span className="mt-2">CSS3</span>
          </div>

          {/* Database */}
          <div className="flex flex-col items-center">
            <FaDatabase className="text-purple-500 w-16 h-16" />
            <span className="mt-2">Database Management</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologiesSection;
