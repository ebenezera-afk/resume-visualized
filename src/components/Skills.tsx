import React from 'react';
import { motion } from 'framer-motion';
import { Database, Laptop, Users, Languages, Star } from 'lucide-react';

const skillCategories = [
  {
    title: "Marketing Strategy",
    icon: <Database className="w-6 h-6" />,
    color: "bg-blue-600",
    skills: ["CRM Management", "Sales Strategy", "Customer Acquisition", "Market Research", "Product Pitching"]
  },
  {
    title: "Digital Tools",
    icon: <Laptop className="w-6 h-6" />,
    color: "bg-slate-900",
    skills: ["Microsoft Office", "Google Docs", "Digital CRM", "Social Media Management", "Data Tracking"]
  },
  {
    title: "Leadership",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-400",
    skills: ["Event Organizing", "Public Speaking", "Team Coordination", "Field Management", "Strategic Communication"]
  },
  {
    title: "Languages",
    icon: <Languages className="w-6 h-6" />,
    color: "bg-indigo-600",
    skills: ["Amharic (Native)", "English (Fluent)", "German (Basic)"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center text-blue-600 mb-8 shadow-inner"
          >
            <Star className="w-10 h-10 fill-current" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expertise & Skills</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
            A balanced mix of technical proficiency and soft skills designed to drive business success in modern marketing environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all group"
            >
              <div className={`${cat.color} text-white w-16 h-16 rounded-[1.5rem] shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 text-slate-900 leading-tight">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:text-blue-600 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};