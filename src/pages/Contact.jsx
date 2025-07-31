import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white p-6 m-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8 border border-blue-100"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-blue-800 mb-6 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Contact Me
        </motion.h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 text-sm md:text-base"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            whileFocus={{ scale: 1.01 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            whileFocus={{ scale: 1.01 }}
          />

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            whileFocus={{ scale: 1.01 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>

          {/* Status message with animation */}
          <AnimatePresence>
            {status && (
              <motion.p
                key="status"
                className={`text-center mt-3 font-medium ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : status.startsWith("Sending")
                    ? "text-blue-500"
                    : "text-red-600"
                }`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {status}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
