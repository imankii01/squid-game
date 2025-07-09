import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onPlayClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayClick }) => {
  const scrollToGame = () => {
    const gameSection = document.getElementById('game-section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border-4 border-pink-500 rotate-45 opacity-30 animate-pulse" />
      <div className="absolute top-40 right-32 w-12 h-12 bg-green-500 rounded-full opacity-40 animate-bounce" />
      <div className="absolute bottom-32 left-32 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-yellow-500 opacity-50" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border-4 border-red-500 opacity-30 animate-spin" style={{ animationDuration: '8s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
            SQUID GAME
            <span className="block text-4xl md:text-6xl text-red-500 mt-2">CHALLENGE</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-4">
            RED LIGHT, GREEN LIGHT
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Think you can survive? Move on green. Freeze on red.
          <span className="block text-red-400 font-semibold mt-2">Or get eliminated.</span>
        </p>

        <div className="space-y-4">
          <button
            onClick={scrollToGame}
            className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-red-500/25"
          >
            <Play className="w-8 h-8 inline mr-3 group-hover:animate-pulse" />
            PLAY NOW
          </button>
          
          <p className="text-gray-400 text-sm">No signup required • Play instantly</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};