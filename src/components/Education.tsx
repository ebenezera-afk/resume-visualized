import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Education = () => {
  return (
    <section id="education" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Qualification</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Education</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed">
            Strong academic foundation in Marketing Management, graduating with distinction from one of Ethiopia's leading universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-[2px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-slate-200 to-transparent hover:from-blue-600 hover:to-indigo-600 transition-all duration-500"
            >
              <div className="bg-white h-full rounded-[3rem] p-10 md:p-14 relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="bg-slate-50 p-5 rounded-3xl group-hover:bg-blue-50 transition-colors">
                    <GraduationCap className="w-10 h-10 text-blue-600" />
                  </div>
                  {edu.gpa && (
                    <div className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-lg shadow-blue-600/20">
                      <Star className="w-3 h-3 fill-current" />
                      GPA {edu.gpa.split(' ')[0]}
                    </div>
                  )}
                  {edu.ssle && (
                    <div className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black">
                      SCORE: {edu.ssle}
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-blue-600 font-bold text-xl mb-8">{edu.university || edu.school}</p>
                
                <div className="flex flex-col gap-5 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{edu.dates}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};