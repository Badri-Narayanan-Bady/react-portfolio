import React from "react";
import { motion } from "framer-motion";

const ProjectsCompletedSection = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-neutral-950 text-white px-8 py-16"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Projects Completed
        </h2>

        {/* Homify Project Description */}
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-white">Homify (Integrated Services Platform)</h3>
          <p className="text-lg text-gray-300">
            Homify is an integrated platform designed to offer various housing-related services, such as real estate, home maintenance, and cleaning. It provides users with an easy way to request services and track their status, while service providers can register and manage their listings.
          </p>
          <p className="text-lg text-gray-300">
            <strong>Key Functionalities:</strong>
            <ul className="list-disc list-inside">
              <li>Location-based service sorting and assignment for users.</li>
              <li>User and service provider registration with secure authentication.</li>
              <li>Real-time tracking of service requests for users and providers.</li>
              <li>Interactive dashboard for service providers to manage their services.</li>
            </ul>
          </p>
        </div>

        {/* ThreadzStore Project Description */}
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-white">ThreadzStore</h3>
          <p className="text-lg text-gray-300">
          ThreadzStore is an online clothing store platform that focuses on providing high-quality fashion for young adults. It features a user-friendly interface for browsing products, secure payment gateways, and an admin panel for managing products and orders.
          </p>
          <p className="text-lg text-gray-300">
            <strong>Key Functionalities:</strong>
            <ul className="list-disc list-inside">
              <li>User authentication for browsing and making purchases.</li>
              <li>Product catalog with filtering options for a personalized shopping experience.</li>
              <li>Admin panel to add, update, and manage products and orders.</li>
              <li>Integrated payment gateway for secure transactions.</li>
            </ul>
          </p>
        </div>

        {/* GitHub Link */}
        <div className="mt-8">
          <p className="text-lg text-gray-300">
            Check out the repositories for more details on these projects and others on my GitHub:
          </p>
          <a
  href="https://github.com/Badri-Narayanan-Bady" // Replace with your actual GitHub link
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 hover:underline"
>
  View My Projects on GitHub
</a>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsCompletedSection;
