import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Shield, Smartphone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-slate-800 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Professional Profile
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Technical Narrative */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Full-stack developer with **6+ years of experience** specializing in high-performance application development. My expertise spans the entire software lifecycle, from architecting scalable back-ends with **.NET Core** and **Node.js** to crafting seamless mobile experiences using **React Native**.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                With a strong foundation in **Computer Science**, I focus on building robust systems that balance technical complexity with intuitive user interfaces. I am committed to clean code principles and stay aligned with modern industry standards in **React.js** and cloud-native environments.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                  <div className="text-2xl font-bold text-indigo-600">6+ Years</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Development Exp.</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                  <div className="text-2xl font-bold text-green-600">Advanced</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">English Proficiency</div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Visuals */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Smartphone className="h-8 w-8 text-indigo-600 mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Mobile</h4>
                  <p className="text-sm text-slate-500">React Native Expert</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Shield className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Back-end</h4>
                  <p className="text-sm text-slate-500">.NET Core & Node.js</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Code className="h-8 w-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Front-end</h4>
                  <p className="text-sm text-slate-500">React.js Specialist</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <Globe className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Global</h4>
                  <p className="text-sm text-slate-500">Remote Collaboration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
