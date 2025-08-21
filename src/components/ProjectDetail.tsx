import React from 'react';
import { ArrowLeft, Calendar, Globe, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  languagePair: string;
  image: string;
  details: {
    client: string;
    duration: string;
    wordCount: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

const projectsData: { [key: number]: Project } = {
  1: {
    id: 1,
    title: 'Subtitle Translation',
    description: 'Professional subtitle translation for a compelling short documentary film.',
    languagePair: 'English to Indonesian',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: {
      client: 'Independent Film Studio',
      duration: '2 weeks',
      wordCount: '5,000 words',
      challenge: 'Maintaining the emotional impact and cultural nuances while adhering to strict timing constraints for subtitle display.',
      solution: 'Carefully crafted concise translations that preserved the original meaning while ensuring readability and proper synchronization with the visual content.',
      result: 'Successfully delivered subtitles that enhanced viewer engagement and received positive feedback from both the production team and Indonesian audiences.'
    }
  },
  2: {
    id: 2,
    title: 'Generative AI For Digital Content and Business',
    description: 'Technical script translation for an innovative educational tech startup.',
    languagePair: 'English to Indonesian',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: {
      client: 'Educational Tech Startup',
      duration: '3 weeks',
      wordCount: '8,000 words',
      challenge: 'Translating complex AI and animation terminology while maintaining accessibility for Indonesian students and educators.',
      solution: 'Developed a specialized glossary and worked closely with the tech team to ensure accuracy of technical concepts in educational context.',
      result: 'Enabled successful launch of the platform in Indonesian market with clear, understandable content that facilitated effective learning.'
    }
  },
  3: {
    id: 3,
    title: 'Academic Paper Translation',
    description: 'Scholarly translation for a prestigious international scientific journal.',
    languagePair: 'Indonesian to English',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: {
      client: 'International Scientific Journal',
      duration: '6 weeks',
      wordCount: '12,000 words',
      challenge: 'Maintaining academic rigor and precise scientific terminology while ensuring the research findings were clearly communicated to an international audience.',
      solution: 'Extensive research into scientific terminology and collaboration with subject matter experts to ensure accuracy and clarity.',
      result: 'Paper was successfully published and received positive peer reviews for its clarity and contribution to the international scientific community.'
    }
  },
  4: {
    id: 4,
    title: 'Literary Translation',
    description: 'Artistic translation of a captivating collection of contemporary short stories.',
    languagePair: 'Indonesian to English',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: {
      client: 'Independent Publishing House',
      duration: '8 weeks',
      wordCount: '20,000 words',
      challenge: 'Preserving the literary style, cultural context, and emotional depth of contemporary Indonesian short stories for English-speaking readers.',
      solution: 'Careful attention to literary devices, cultural references, and maintaining the author\'s unique voice while ensuring accessibility for international readers.',
      result: 'Collection was well-received by literary critics and contributed to greater international appreciation of contemporary Indonesian literature.'
    }
  }
};

interface ProjectDetailProps {
  projectId: number;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const { theme } = useTheme();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Project Not Found</h2>
          <button
            onClick={() => window.location.hash = ''}
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const goBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={goBack}
          className="flex items-center text-accent hover:text-accent-hover mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <div className="mb-6">
              <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                {project.languagePair}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-text mb-4">{project.title}</h1>
            <p className="text-xl text-text-muted mb-8">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-accent mr-3" />
                <div>
                  <p className="text-sm text-text-muted">Duration</p>
                  <p className="font-semibold text-text">{project.details.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-accent mr-3" />
                <div>
                  <p className="text-sm text-text-muted">Word Count</p>
                  <p className="font-semibold text-text">{project.details.wordCount}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-accent mr-3" />
                <div>
                  <p className="text-sm text-text-muted">Client</p>
                  <p className="font-semibold text-text">{project.details.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-text mb-4">Challenge</h3>
              <p className="text-text-muted leading-relaxed">{project.details.challenge}</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-text mb-4">Solution</h3>
              <p className="text-text-muted leading-relaxed">{project.details.solution}</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-text mb-4">Result</h3>
              <p className="text-text-muted leading-relaxed">{project.details.result}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;