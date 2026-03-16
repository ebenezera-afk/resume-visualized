import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, MapPin, MousePointer2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero = () => {
  const profileImg = "https://storage.googleapis.com/dala-prod-public-storage/attachments/e07c8452-cb9a-4622-a6f8-991ed4ac016c/1773655227899_photo_2025-12-01_11-12-09.jpg";
  const bgImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/199910f6-2e5c-408e-8d77-df4899d8a568/hero-bg-18e8f329-1773654174809.webp";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-[20s] ease-linear"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-blue-900/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full border border-blue-400/20 mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-bold tracking-wider uppercase">Open for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Growth</span> & Impact.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Hi, I'm <span className="text-white font-semibold">{resumeData.personal_information.name}</span>. 
              A marketing specialist focused on strategic sales and exceptional event coordination.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40"
              >
                View My Portfolio <ArrowRight className="w-5 h-5" />
              </motion.a>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={`mailto:${resumeData.personal_information.email}`}
                  className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/10 transition-all backdrop-blur-md"
                  title="Email Ebenezer"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={resumeData.personal_information.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/10 transition-all backdrop-blur-md"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="font-medium tracking-wide">{resumeData.personal_information.location}, Ethiopia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/5 group bg-slate-800">
              <img 
                src={profileImg} 
                alt={resumeData.personal_information.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/30 rounded-full blur-[100px] animate-pulse delay-700" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -right-8 top-1/3 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <MousePointer2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Available</p>
                  <p className="text-white font-bold text-sm">Full-Time / Freelance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <p className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
};