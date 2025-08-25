import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent mb-4">
              Muhammad Ghifari Amirullah
            </h3>
            <p className="text-text-muted mb-6 max-w-md">
              Professional English-Indonesian translator bridging languages and connecting worlds through precise, culturally-aware translation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ghifari.amirullah@example.com"
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-text-muted">ghifari.amirullah@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-text-muted">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-text-muted">Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2024 Muhammad Ghifari Amirullah. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-accent hover:bg-accent-hover rounded-lg transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;