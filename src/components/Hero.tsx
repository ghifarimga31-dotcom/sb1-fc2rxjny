import React, { useEffect, useState } from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Bridging Languages, Connecting Worlds.';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypewriterText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1000);
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
          {showCursor && !typewriterText.includes('.') && <span className="animate-pulse">|</span>}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto">
          Professional translation services for English and Indonesian, crafted for the modern world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </button>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-text-muted mb-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm">Trusted by 50+ clients worldwide</span>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-text-muted mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;