import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200/10 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-text mb-2">Muhammad Ghifari Amirullah</h3>
            <p className="text-text-muted">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
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