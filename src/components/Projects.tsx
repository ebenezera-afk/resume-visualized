import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Info, Target, Zap, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Life Experience Sharing Event",
    category: "Event Management",
    description: "Orchestrated a high-impact campus event featuring industry leaders and motivational speakers.",
    longDescription: "Recognized with a formal certificate for outstanding organizational skills. This initiative involved conceptualizing the event theme, securing high-profile speakers, managing a marketing budget, and coordinating logistics for an audience of 200+. Successfully increased student engagement by 40% compared to previous events.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/199910f6-2e5c-408e-8d77-df4899d8a568/event-project-95e60407-1773654175216.webp",
    tags: ["Logistics", "PR", "Promotion", "Leadership"],
    achievements: ["Awarded Certificate of Merit", "200+ Attendance", "4.8/5 Event Rating"]
  },
  {
    title: "Merchant Acquisition Drive",
    category: "Strategic Sales",
    description: "Rapid expansion of the Telebirr digital payment ecosystem through aggressive merchant onboarding.",
    longDescription: "During my internship at Teleport Technologies, I developed a systematic approach to identify and pitch to small and medium enterprises. I successfully onboarded over 50 merchants within a 3-month period, contributing to a 15% increase in local transaction volume. This involved training merchants on the platform and troubleshooting initial technical hurdles.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/199910f6-2e5c-408e-8d77-df4899d8a568/marketing-project-5eacd7a0-1773654175220.webp",
    tags: ["Sales", "Fintech", "Negotiation", "CRM"],
    achievements: ["50+ Merchants Registered", "Top Intern Performance", "Digital Literacy Training"]
  },
  {
    title: "Rural Outreach Program",
    category: "Community Impact",
    description: "Executing safety net initiatives in underserved rural areas to enhance financial inclusion.",
    longDescription: "Implemented outreach strategies for Telebirr's safety net programs in rural Dire Dawa. This required deep cultural understanding and the ability to simplify complex financial concepts. I led a team of 3 field agents to ensure sim card distribution and account verification reached the intended beneficiaries effectively.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Field Ops", "Communication", "Social Impact"],
    achievements: ["1000+ Rural Registrations", "Enhanced Brand Trust", "Detailed Field Reporting"]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              <Zap className="w-4 h-4" />
              <span>Key Contributions</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black">Featured Projects</h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg font-light leading-relaxed">
            Real-world initiatives where I've demonstrated leadership and marketing expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 flex flex-col h-full transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-6 right-6 bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                  {project.category}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-slate-300 px-3 py-1.5 rounded-xl border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-sm font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 group/btn"
                >
                  Project Details <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-white text-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 relative min-h-[300px]">
                <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              <div className="md:w-1/2 p-10 md:p-14 overflow-y-auto">
                <div className="bg-blue-600 text-white font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest inline-block mb-8 shadow-lg shadow-blue-600/30">
                  {selectedProject.category}
                </div>
                <h2 className="text-4xl font-black mb-6 leading-tight">{selectedProject.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-10 text-lg font-light">
                  {selectedProject.longDescription}
                </p>

                <h4 className="font-black mb-6 text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Key Achievements
                </h4>
                <div className="space-y-4 mb-10">
                  {selectedProject.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span className="font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black bg-slate-900 text-white px-4 py-2 rounded-xl uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);