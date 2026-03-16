import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            <Briefcase className="w-4 h-4" />
            <span>Professional Career</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                      <Building2 className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-bold text-lg">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-sm font-bold">
                      <Calendar className="w-4 h-4" />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 px-4 py-1 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-12">
                    <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      Key Responsibilities
                    </h4>
                    <ul className="grid md:grid-cols-1 gap-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-4 items-start text-slate-600 text-lg leading-relaxed bg-slate-50/50 p-5 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0 shadow-lg shadow-blue-600/40" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Background accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/30 blur-[60px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};