import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [projectId, setProjectId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = parseInt(hash.split('/')[1]);
        setProjectId(id);
        setCurrentView('project');
      } else {
        setCurrentView('home');
        setProjectId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
          </>
        ) : (
          projectId && <ProjectDetail projectId={projectId} />
        )}
        
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;