import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Accessibility } from 'accessibility';
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  useEffect(() => {
    const accessibilityInstance = new Accessibility({
        icon: {
          circular: true
        },
        session: {
          persistent: false
        }
    });
    
    return () => {
      if (accessibilityInstance && typeof accessibilityInstance.destroy === 'function') {
        accessibilityInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,58,82,0.777),rgba(255,255,255,.0420))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Analytics />
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App