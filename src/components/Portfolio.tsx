import React from 'react';
import { ExternalLink, Calendar, Globe2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const Portfolio: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Subtitle Translation',
      description: 'Professional subtitle translation for a compelling short documentary film.',
      languagePair: 'English to Indonesian',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: 'December 2024',
      category: 'Media Translation'
    },
    {
      id: 2,
      title: 'Generative AI For Digital Content and Business',
      description: 'I bridge the gap between creative vision and technical execution by implementing cutting-edge Generative AI solutions.',
      languagePair: 'English to Indonesian',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: 'November 2024',
      category: 'Technical Translation'
    },
    {
      id: 3,
      title: 'Academic Paper Translation',
      description: 'Scholarly translation for a prestigious international scientific journal.',
      languagePair: 'Indonesian to English',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: 'October 2024',
      category: 'Academic Translation'
    },
    {
      id: 4,
      title: 'Literary Translation',
      description: 'Artistic translation of a captivating collection of contemporary short stories.',
      languagePair: 'Indonesian to English',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: 'September 2024',
      category: 'Literary Translation'
    }
  ];

  const handleProjectClick = (projectId: number) => {
    window.location.hash = `project/${projectId}`;
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 relative">
            My Work
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-accent transition-all duration-1000 ${
              isVisible ? 'w-24' : 'w-0'
            }`}></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group cursor-pointer bg-card hover:bg-card-hover rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                  <Globe2 className="h-4 w-4 ml-2" />
                  <span>{project.languagePair}</span>
                </div>
                
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;