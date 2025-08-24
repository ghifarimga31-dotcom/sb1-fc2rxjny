import React from 'react';
import { Linkedin, Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200/10 bg-card/50">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent hover:bg-accent-hover text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text mb-2">Muhammad Ghifari Amirullah</h3>
            <p className="text-text-muted mb-4">Professional English-Indonesian Translator</p>
            <p className="text-sm text-text-muted">Bridging languages, connecting worlds through precise and culturally-aware translation services.</p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-text mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-text-muted hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-text mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="mailto:ghifari.amirullah@example.com"
                className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ghifari3105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-text-muted">Available for projects worldwide</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200/10 pt-8 text-center">
          <p className="text-text-muted">
            © {new Date().getFullYear()} Muhammad Ghifari Amirullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
            <a
              href="https://www.linkedin.com/in/ghifari3105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;