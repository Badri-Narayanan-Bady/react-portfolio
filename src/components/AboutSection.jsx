import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-8 py-16"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      whileInView={{ opacity: 1, x: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of the section is visible
      transition={{ duration: 1.1 }} // Smooth transition
    >
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          About Me
        </h2>

        {/* Personal Information */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-black-500 shadow-lg">
            <img
              src="/images/1000084465.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Personal Details */}
          <div className="space-y-4">
            <p>
              <span className="font-bold">Name:</span> Badri Narayanan
            </p>
            <p>
              <span className="font-bold">Location:</span> Chennai, India
            </p>
          </div>
        </div>

        {/* Professional Background */}
        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-2xl font-semibold">Professional Background</h3>
          <p>
            <span className="font-bold">Job Title:</span> Front-end and Back-end
            Developer at Intel
          </p>
          <p>
            <span className="font-bold">Experience:</span> 2 months
          </p>
          <p>
            <span className="font-bold">Skills:</span> Full Stack Development,
            RDBMS, C++, JavaScript, Python
          </p>
          <p>
            <span className="font-bold">Education:</span> B. Tech Computer
            Science and Engineering (IoT)
          </p>
        </div>

        {/* Hobbies and Passions */}
        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-2xl font-semibold">Hobbies & Passions</h3>
          <p>
            <span className="font-bold">Hobbies:</span> Football, Hip-Hop Artist,
            Fitness Training
          </p>
          <p>
            <span className="font-bold">Passions:</span> To keep learning new
            things, and get to know different places and people across the world.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
