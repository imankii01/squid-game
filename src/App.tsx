import React from 'react';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { InstructionsSection } from './components/InstructionsSection';
import { GameSection } from './components/GameSection';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const scrollToGame = () => {
    const gameSection = document.getElementById('game-section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection onPlayClick={scrollToGame} />
      <InstructionsSection />
      <GameSection />
      <Footer />
    </div>
  );
}

export default App;