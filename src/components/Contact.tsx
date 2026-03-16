import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { resumeData } from '../data/resume';
import { supabase } from '../integrations/supabase';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast.success("Message sent! Ebenezer will get back to you soon.", {
        description: "Thanks for reaching out! A copy of your inquiry has been sent to our records.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message", {
        description: error.message || "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs mb-6">
                  <div className="w-8 h-[2px] bg-blue-600" />
                  <span>Get in touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight">
                  Let's Work <span className="text-blue-600">Together</span>
                </h2>
                <p className="text-slate-500 text-xl mb-12 font-light leading-relaxed">
                  Have a project in mind or just want to chat about marketing strategy? I'm always open to discussing new opportunities.
                </p>

                <div className="grid gap-8">
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href={`mailto:${resumeData.personal_information.email}`} 
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">Email</p>
                      <p className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {resumeData.personal_information.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-xl font-black text-slate-900">
                        {resumeData.personal_information.phone}
                      </p>
                    </div>
                  </motion.div>

                  <motion.a 
                    whileHover={{ x: 10 }}
                    href={resumeData.personal_information.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-[#0077b5] group-hover:text-white transition-all shadow-sm">
                      <Linkedin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">LinkedIn</p>
                      <p className="text-xl font-black text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                        ebenezer-abebe <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                      </p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 relative"
              >
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      required 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunities" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6} 
                      placeholder="Tell me about your project..." 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-600/30 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Launch Message'}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
                
                {/* Visual background element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-indigo-100 rounded-full blur-[60px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};