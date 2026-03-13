import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Database, Layers } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaCogs,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      color: "text-indigo-600",
      skills: [
        { name: "React.js", icon: <SiReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      color: "text-green-600",
      skills: [
        { name: ".NET Core", icon: <SiDotnet className="text-purple-600" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "REST APIs", icon: <FaCogs className="text-indigo-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
        { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-purple-600",
      skills: [
        { name: "React Native", icon: <SiReact className="text-blue-500" /> },
        { name: "Mobile UI/UX", icon: <Layers className="h-4 w-4 text-pink-500" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="h-6 w-6" />,
      color: "text-yellow-600",
      skills: [
        { name: "Git / GitHub", icon: <SiGit className="text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Technical Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive stack focused on building scalable, cross-platform solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:border-indigo-500 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className={`mr-3 p-2 bg-slate-50 dark:bg-slate-900 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
