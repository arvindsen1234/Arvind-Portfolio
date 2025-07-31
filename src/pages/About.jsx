import React from "react";
import { motion } from "framer-motion";


const skills = [
  "Java", "JavaScript", "HTML", "CSS",
  "React.js","Next.js", "Node.js", "Express.js", "MongoDB","MySQL",
  "Tailwind CSS", "Git & GitHub", "Postman", "VS Code"
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full m-10">
          About Me
        </h2>

        {/* Summary + Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Summary */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Summary</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              I’m a B.Tech CSE student passionate about full-stack development and problem solving.
              I enjoy building modern web applications with the MERN stack and improving my skills in Java and DSA.
              Always eager to learn and contribute to impactful software projects.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Education</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
              <li>B.Tech CSE, RITS Bhopal – CGPA: 7.6 (2022-2026)</li>
              <li>12th – Nutan Higher Secondary School – 83%</li>
              <li>10th – Swastik Convent School – 79%</li>
            </ul>
          </motion.div>
        </div>

        {/* Skills & Technologies (Animated Grid) */}
        <motion.div
          className="mb-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Skills & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm text-center hover:scale-105 transition font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Achievements</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-disc ml-5">
            <li>📘 Solved 150+ DSA problems on LeetCode</li>
            <li>🏅 DSA Certification from recognized platform</li>
            <li>👨‍💼 Placement Cell Coordinator — managed 50+ recruitments</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
