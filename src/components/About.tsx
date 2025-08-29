import React from 'react';
import { GraduationCap, Award, Globe, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 relative">
            About Me
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-accent transition-all duration-1000 ${
              isVisible ? 'w-24' : 'w-0'
            }`}></div>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent to-accent-hover p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center text-accent text-6xl font-bold">
                    MGA
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-text mb-4">Muhammad Ghifari Amirullah</h3>
              <p className="text-lg text-text-muted leading-relaxed">
                As a graduate of English Literature from Padjadjaran University, I hold a Bachelor of Humanities (S.Hum.) degree. My academic background has provided me with a strong foundation in both spoken and written English.
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed">
                My expertise lies in translating documents, subtitles, and transcripts between English and Indonesian. I am passionate about creating translations that are not only accurate but also culturally relevant and engaging. I am always open to new experiences and thrive in dynamic work environments.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-text">Education</p>
                    <p className="text-sm text-text-muted">S.Hum. English Literature</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-text">Experience</p>
                    <p className="text-sm text-text-muted">3+ Years Professional</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-text">Languages</p>
                    <p className="text-sm text-text-muted">English & Indonesian</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-text">Specialization</p>
                    <p className="text-sm text-text-muted">Literary & Technical</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {['English Literature', 'Document Translation', 'Subtitle Translation', 'Cultural Adaptation'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;