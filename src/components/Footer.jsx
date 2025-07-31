import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-blue-100 text-gray-700 pt-10 pb-6 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* About */}
        <div>
          <h4 className="text-blue-800 font-semibold mb-2">About Me</h4>
          <p>
            I'm Arvind Sen, a MERN Stack Developer passionate about building modern,
            scalable web apps and crafting intuitive UI experiences.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-blue-800 font-semibold mb-2">Technologies</h4>
          <ul className="space-y-1">
            <li>React.js, Node.js, Express</li>
            <li>MongoDB, Java, JavaScript</li>
            <li>Tailwind CSS, Git & GitHub</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-blue-800 font-semibold mb-2">Connect with Me</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/arvind-sen-66b009269/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arvindsen1075@gmail.com"
              className="hover:text-blue-700 transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/arvindsen1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Arvind Sen. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
