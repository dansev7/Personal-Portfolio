import React from 'react';
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ExternalLink, Github } from "lucide-react";
import CardOrder from '../assets/CardPrint.png';
import DrAdmikew from '../assets/DrAdmikew.png';
import ResidentPortal from '../assets/ResidentPortal.png';
export default function Projects() {
  const projects = [
    {
      name: "Fayda ID Card Ordering System",
      description:
        "Engineered the entire backend for the National ID Program's card ordering system. Integrated with EthioPost and Chapa payment gateway to serve 35M+ users nationwide.",
      image:
        CardOrder,
      technologies: ["Node.js", "Express.js", "React.js", "PostgreSQL", "Chapa", "PostGIS"],
      liveDemo: "https://card-order.fayda.et/",
      github: "#", // Add GitHub link if public
    },
    {
      name: "National Resident Portal",
      description:
        "Developed a secure portal allowing over 35 million citizens to update demographic data and manage personal Fayda ID information in real-time.",
      image:
        ResidentPortal,
      technologies: ["Node.js", "React.js", "PostgreSQL", "Scalable Architecture"],
      liveDemo: "https://resident.fayda.et/",
      github: "#",
    },
    {
      name: "Dr. Admikew Medical Center",
      description:
      "A comprehensive medical center management system with patient records, appointment scheduling, and doctor-patient communication features.",
      image:
      DrAdmikew,
      technologies: ["React.js", "Express.js", "Supabase"],
      liveDemo: "https://dradmikewmedcenter.com",
      github: "#",
    },
    {
      name: "Food Delivery System",
      description:
        "A comprehensive food delivery platform with real-time tracking, secure payments, and cross-platform mobile app built with React Native.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Chapa"],
      liveDemo: "#",
      github: "#",
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      "React.js": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Express.js": "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
      "React Native": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
      "PostgreSQL": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "PostGIS": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Chapa": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Supabase": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    };
    return colors[tech] || "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-slate-900 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Impactful Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Showcasing large-scale digital solutions that serve millions of users and power national infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 group border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </Button>
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Codebase
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
