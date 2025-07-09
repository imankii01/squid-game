import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const quotes = [
    "You've come too far to back out now.",
    "Move on green, freeze on red. That's life.",
    "Winning isn't everything. It's survival.",
    "The only rule is... don't get caught.",
    "You either play... or you're eliminated.",
    "In this game, there are no second chances.",
    "Every step could be your last.",
    "The doll is watching... always watching."
  ];

  useEffect(() => {
    // Rotate quotes every 1.5 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 1500);

    // Minimum loading time of 4 seconds
    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade out animation
    }, 4000);

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete, quotes.length]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-50 transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30,5 50,45 10,45'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Animated Squid Game Shapes */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          {/* Triangle */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-pink-500 transform rotate-0 animate-spin" 
                 style={{ 
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   animationDuration: '3s'
                 }}>
            </div>
            <div className="absolute inset-0 w-16 h-16 bg-pink-500/20 transform rotate-0 animate-pulse"
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            </div>
          </div>

          {/* Square */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-red-500 animate-pulse">
            </div>
            <div className="absolute inset-2 bg-red-500/20 animate-bounce">
            </div>
          </div>

          {/* Circle */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-500 rounded-full animate-spin" 
                 style={{ animationDuration: '2s' }}>
            </div>
            <div className="absolute inset-2 bg-green-500/20 rounded-full animate-ping">
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider">
            SQUID GAME
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-green-500 mx-auto mb-4 animate-pulse" />
          <p className="text-xl text-gray-300 font-medium">CHALLENGE</p>
        </div>

        {/* Rotating Quotes */}
        <div className="h-16 flex items-center justify-center">
          <p className="text-lg md:text-xl text-gray-300 italic transition-all duration-500 transform">
            "{quotes[currentQuoteIndex]}"
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-gray-500 text-sm">Loading your survival challenge...</p>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-pink-500/30 transform rotate-45 animate-pulse" />
        <div className="absolute top-32 right-32 w-6 h-6 bg-red-500/30 animate-bounce" />
        <div className="absolute bottom-32 left-32 w-10 h-10 border-2 border-green-500/30 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-500/30 transform rotate-45 animate-ping" />
        
        {/* Additional floating triangles */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-red-500/20 transform rotate-12 animate-pulse"
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 border-2 border-green-500/20 transform -rotate-12 animate-bounce"
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </div>

      {/* Fade out overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isVisible ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};