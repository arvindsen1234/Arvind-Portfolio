import React from "react";
import { motion } from "framer-motion";

// Your project data
const projects = [
  {
    title: "AI-Powered Code Reviewer",
    description:
      "AI-based code analysis tool using MERN stack and Google GenAI to suggest code improvements.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Google GenAI"],
  },
  {
    title: "E-commerce Learning Platform",
    description:
      "React js application for managing coding courses, user  and real-time course updates.",
    technologies: ["React","javaScript", "Tailwind"],
  },
  {
    title: "Employment Management System",
    description:
      "MERN app to add, update, delete, and search employee records efficiently for organizations.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using React, Tailwind, and Framer Motion to showcase skills and projects.",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Expense Tracker",
    description:
      "A smart financial tracking app that allows users to record income and expenses, categorize spending, and view visual charts for better money management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Chart.js"],
  },
  {
    title: "Virtual Assistant",
    description:
      "A personalized AI-powered virtual assistant that helps with daily tasks such as reminders, notes, weather updates, and intelligent query handling.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "OpenAI API", "Gemini"],
  },
];

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 m-10">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-2xl border border-blue-100"
            variants={card}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
