import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Globe, Quote } from 'lucide-react';
import { resumeData } from '../data/resume';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-20 -right-20 text-[12rem] font-black text-slate-50 select-none pointer-events-none whitespace-nowrap hidden lg:block">
        STRATEGY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <div className="w-8 h-[2px] bg-blue-600" />
              <span>Personal Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">
              A Graduate Passionate About <span className="text-blue-600">Growth Marketing</span>
            </h2>
            
            <div className="relative mb-10">
              <Quote className="absolute -left-8 -top-4 w-12 h-12 text-slate-100 -z-10" />
              <p className="text-xl text-slate-600 leading-relaxed italic font-light">
                "{resumeData.summary}"
              </p>
            </div>

            <div className="space-y-6 text-lg text-slate-600 mb-12">
              <p>
                With a Bachelor's degree from <strong>Dire Dawa University</strong>, I've cultivated a deep understanding of marketing principles and consumer behavior. My approach combines analytical data-driven strategies with creative event planning to deliver comprehensive business solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 group">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Academic Excellence</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Graduated with Distinction and a cumulative GPA of 3.54.</p>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 group">
                <div className="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Global Perspective</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Trilingual capabilities in Amharic, English, and basic German.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 gap-4 h-[600px]"
          >
            <div className="col-span-7 h-full">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategy Meeting" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4">
              <div className="h-2/3 bg-blue-600 rounded-[3rem] p-10 flex flex-col justify-end text-white shadow-xl">
                <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Education</p>
                <p className="text-3xl font-black">Marketing Degree</p>
              </div>
              <div className="h-1/3 bg-slate-900 rounded-[3rem] flex items-center justify-center p-6 text-center text-white shadow-xl">
                <div>
                  <p className="text-4xl font-black mb-1">3.54</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Graduated GPA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};