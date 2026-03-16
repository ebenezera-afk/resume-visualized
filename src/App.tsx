import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;