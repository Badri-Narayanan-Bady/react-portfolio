import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-8 py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300">
          If you'd like to get in touch, feel free to reach out to me via email or connect with me through my social media handles.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Gmail */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 w-8 h-8" />
            <span className="text-lg text-gray-300">bady.naray7@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-700 w-8 h-8" />
            <span className="text-lg text-gray-300">
              <a
                href="https://www.linkedin.com/in/badri-narayanan-1ab40a27a/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin
              </a>
            </span>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <FaInstagram className="text-pink-600 w-8 h-8" />
            <span className="text-lg text-gray-300">
              <a
                href="https://www.instagram.com/badr.is_here" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                instagram
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
