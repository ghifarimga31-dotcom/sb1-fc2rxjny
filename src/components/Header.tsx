import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg md:text-xl font-bold text-text hover:text-accent transition-colors"
          >
            <span className="hidden sm:inline">Muhammad Ghifari Amirullah</span>
            <span className="sm:hidden">MGA</span>
          </button>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-text hover:text-accent transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-card hover:bg-card-hover transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-text" />
              ) : (
                <SunIcon className="h-5 w-5 text-text" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-card hover:bg-card-hover transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-text" />
              ) : (
                <Menu className="h-5 w-5 text-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-gray-200/10 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-text hover:text-accent hover:bg-card-hover rounded-lg transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
            {[
              { name: 'Services', id: 'services' },
              { name: 'Portfolio', id: 'portfolio' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-card hover:bg-card-hover transition-all duration-300 transform hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5 text-text" />
            ) : (
              <SunIcon className="h-5 w-5 text-text" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;