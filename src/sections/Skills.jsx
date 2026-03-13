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
  SiDjango,
  SiFlutter,
  SiCplusplus,
  SiGitlab,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import {
  FaCogs,
  FaTools,
  FaJava,
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
        { name: ".NET", icon: <SiDotnet className="text-purple-600" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Django", icon: <SiDjango className="text-emerald-800 dark:text-emerald-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 dark:text-blue-400" /> },
        { name: "SQL Server", icon: <FaDatabase className="text-red-600 dark:text-red-500" /> },
      ],
    },
    {
      title: "Mobile & Core",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-purple-600",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-cyan-500" /> },
        { name: "React Native", icon: <SiReact className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700 dark:text-blue-400" /> },
        { name: "Java", icon: <FaJava className="text-orange-600 dark:text-orange-500" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="h-6 w-6" />,
      color: "text-amber-600",
      skills: [
        { name: "GitLab", icon: <SiGitlab className="text-orange-600" /> },
        { name: "Git / GitHub", icon: <SiGit className="text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
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
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className={`mr-4 p-3 bg-slate-50 dark:bg-slate-900/80 rounded-xl shadow-sm decoration-clone group-hover:scale-110 transition-transform ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
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
