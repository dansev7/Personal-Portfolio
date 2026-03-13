import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
// import portfolioImg from '../assets/portfolio.jpg'

export default function Hero() {
  const handleHireMe = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,"; // Replace with your base64 PDF
    link.download = "Daniel_Ayele_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="bg-slate-50 dark:bg-slate-900 py-20 lg:py-32 px-4"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <motion.h1
                className="text-4xl pb-[8px] md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-slate-900 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Daniel Ayele
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 h-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "FullStack Developer",
                    2000,
                    "MERN Developer",
                    2000,
                    "PERN Developer",
                    2000,
                    ".NET Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate developer building modern web and mobile apps. I turn
              ideas into responsive, scalable, and impactful solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleHireMe}
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 hover:cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-3" />
                Hire Me
              </button>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 px-6 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 hover:cursor-pointer group"
              >
                <Download className="w-5 h-5 mr-3 group-hover:text-indigo-600" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="https://github.com/DanSev7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-ayele-105a37289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/DanielAyel21507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src='./portfolio.JPG'
                alt="Daniel Ayele - Developer"
                className="rounded-full object-cover w-full h-full border-4 border-white/50 dark:border-slate-800/50 backdrop-blur-sm shadow-2xl z-10 relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
