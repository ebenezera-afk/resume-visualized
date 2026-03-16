import React from 'react';
import { Mail, Linkedin, MapPin, Heart, ArrowUp } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-500 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-xl">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">{resumeData.personal_information.name}</span>
            </div>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
              Transforming businesses through strategic marketing, innovative event solutions, and results-driven sales approaches.
            </p>
            <div className="flex gap-4">
              <a 
                href={`mailto:${resumeData.personal_information.email}`}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Mail size={22} />
              </a>
              <a 
                href={resumeData.personal_information.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
              <ul className="space-y-4 font-bold">
                {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Direct</h4>
              <ul className="space-y-4 font-bold">
                <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} {resumeData.personal_information.name}. Handcrafted with precision.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-all text-sm font-black text-white group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-sm font-medium">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in Ethiopia
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
    </footer>
  );
};

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);