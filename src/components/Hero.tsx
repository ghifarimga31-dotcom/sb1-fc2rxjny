import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Bridging Languages, Connecting Worlds.';

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypewriterText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          {typewriterText.includes('Connecting Worlds') ? (
            <>
              Bridging Languages, <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Connecting Worlds</span>.
            </>
          ) : (
            typewriterText
          )}
          {!typewriterText.includes('.') && <span className="animate-pulse">|</span>}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto">
          Professional translation services for English and Indonesian, crafted for the modern world.
        </p>
        
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
};

export default Hero;