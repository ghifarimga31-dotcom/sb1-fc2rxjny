import React from 'react';
import { FileText, Globe, Edit3, Clock, CheckCircle, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: FileText,
      title: 'Document Translation',
      description: 'For legal, technical, and business documents where precision is paramount.',
      features: ['Legal Documents', 'Technical Manuals', 'Business Contracts', 'Certificates']
    },
    {
      icon: Globe,
      title: 'Localization',
      description: 'Adapting websites, software, and apps to resonate with a new target market.',
      features: ['Website Content', 'Mobile Apps', 'Software UI', 'Marketing Materials']
    },
    {
      icon: Edit3,
      title: 'Proofreading & Editing',
      description: 'Polishing and refining translated content for ultimate clarity and accuracy.',
      features: ['Grammar Check', 'Style Enhancement', 'Cultural Adaptation', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 relative">
            My Services
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-accent transition-all duration-1000 ${
              isVisible ? 'w-24' : 'w-0'
            }`}></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card hover:bg-card-hover p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text mb-4 text-center">{service.title}</h3>
              <p className="text-text-muted text-center leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="flex justify-center mb-4">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">24-48h</h3>
            <p className="text-text-muted">Average Turnaround</p>
          </div>
          
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">50+</h3>
            <p className="text-text-muted">Happy Clients</p>
          </div>
          
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '1200ms' }}>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">99%</h3>
            <p className="text-text-muted">Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;