import React from "react";
import { motion } from "framer-motion";

const WorkExperienceSection = () => {
  return (
    <motion.section
      id="work-experience"
      className="min-h-screen bg-gray-900 text-white px-8 py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Work Experience
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mt-4">
          During my <strong>Intel Unnati Industrial Training Program</strong>, I gained invaluable experience in developing service-based web platforms. My focus was on delivering high-quality solutions that integrate essential everyday services while ensuring ease of use and scalability.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Features Implemented
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              Front-End Development: Created intuitive user interfaces using HTML, CSS, and JavaScript, ensuring a responsive and visually appealing user experience.
            </li>
            <li>
              Database Management: Designed and managed relational databases using MySQL, and Oracle, applying normalization techniques and entity-relationship modeling.
            </li>
            <li>
              Full-Stack Integration: Integrated front-end and back-end systems, ensuring seamless functionality and secure communication.
            </li>
            <li>
              Service-Based Features: Developed a platform to offer integrated services, such as real estate, plumbing, carpentry, and home maintenance.
            </li>
          </ul>
        </div>

        {/* Summary */}
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Key Contributions
          </h3>
          <p className="text-gray-300">
            As a <strong>Front-End Developer</strong> and <strong>Database Admin</strong>, I contributed to the visual design, relational database management, and end-to-end development of the platform. My role involved creating a user-centric design, optimizing database performance, and ensuring the smooth deployment of the application.
          </p>
          <p className="text-gray-300">
            This experience not only enhanced my technical skills but also honed my problem-solving abilities and understanding of real-world project management.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperienceSection;
