import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaInstagram,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

// LeetCode SVG icon component
const LeetCodeIcon = ({ size = 28, className = "" }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24.042 6.136a2.25 2.25 0 0 1 3.17 0l14.654 14.654a2.25 2.25 0 0 1 0 3.17L27.212 38.884a2.25 2.25 0 0 1-3.17 0l-3.62-3.62a2.25 2.25 0 0 1 3.18-3.19l2.038 2.04L35.75 23.954 25.64 13.844l-9.968 9.97a2.25 2.25 0 1 1-3.18-3.19l11.55-11.55Z"
      fill="#FFA116"
    />
    <path
      d="M19.22 28.426a2.25 2.25 0 0 1 0 3.17l-5.336 5.336a2.25 2.25 0 0 1-3.17-3.17l5.335-5.336a2.25 2.25 0 0 1 3.17 0Z"
      fill="#000"
    />
  </svg>
);

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-100 to-white p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image */}
      <motion.div
        className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg mb-6 md:mb-0 md:mr-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <img
          src={profileImg}
          alt="Arvind Sen"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-xl text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Arvind Sen 👋
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Developer | Java Programmer | UI/UX Enthusiast
        </motion.p>

        <motion.p
          className="text-sm text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I specialize in building full-stack web applications using the MERN stack and Java. 
          With a passion for responsive design and performance optimization, I’ve built several projects including an Employee Management System, E-Commerce platforms, and portfolio websites.
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/arvindsen1234" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:text-black transition transform hover:scale-110 duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/arvind-sen-66b009269/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="hover:text-blue-800 transition transform hover:scale-110 duration-300" />
          </a>
          <a href="mailto:arvindsen1075@gmail.com">
            <FaEnvelope size={28} className="hover:text-red-600 transition transform hover:scale-110 duration-300" />
          </a>
          <a href="https://www.instagram.com/arvindsen_007/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} className="hover:text-pink-500 transition transform hover:scale-110 duration-300" />
          </a>
          <a href="https://leetcode.com/u/senarvind/" target="_blank" rel="noopener noreferrer">
            <LeetCodeIcon className="hover:scale-110 transition transform duration-300" />
          </a>
          <a href="https://drive.google.com/file/d/1DZH9CiYW6ZRwHF6P_jluxqFUa_X5gap0/view?usp=drivesdk" download>
            <FaFileAlt size={28} className="hover:text-green-700 transition transform hover:scale-110 duration-300" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1DZH9CiYW6ZRwHF6P_jluxqFUa_X5gap0/view?usp=drivesdk"
            className="bg-gray-200 text-blue-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
