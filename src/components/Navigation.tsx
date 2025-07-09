import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

export const Navigation: React.FC = () => {
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
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-sm mr-3 flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-xl">Squid Game</span>
              <span className="block text-xs text-gray-400">by @imankii01</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('game-section')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Play Game
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('game-section')}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
            >
              Play Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('game-section')}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                Play Game
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('game-section')}
                className="w-full bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded-lg transition-colors font-semibold"
              >
                Play Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};