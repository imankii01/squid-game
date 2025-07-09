import React, { useState } from 'react';
import { Maximize, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { useGame } from '../hooks/useGame';
import { StartScreen } from './StartScreen';
import { Game } from './Game';
import { GameOverScreen } from './GameOverScreen';

export const GameSection: React.FC = () => {
  const { gameState, startGame, movePlayer, resetGame, isMuted, setIsMuted } = useGame();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleRestart = () => {
    startGame();
  };

  const handleBackToMenu = () => {
    resetGame();
  };

  const toggleFullscreen = () => {
    const gameContainer = document.getElementById('game-container');
    if (!document.fullscreenElement) {
      gameContainer?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleMute = () => {
    setIsMuted?.(!isMuted);
  };

  const renderGameContent = () => {
    if (!gameState.gameStarted) {
      return <StartScreen onStart={startGame} highScore={gameState.highScore} />;
    }

    if (gameState.isGameOver) {
      const isNewHighScore = gameState.score > gameState.highScore;
      return (
        <GameOverScreen
          score={gameState.score}
          highScore={gameState.highScore}
          isNewHighScore={isNewHighScore}
          onRestart={handleRestart}
          onBackToMenu={handleBackToMenu}
        />
      );
    }

    return <Game gameState={gameState} onMovePlayer={movePlayer} />;
  };

  return (
    <section id="game-section" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ENTER THE GAME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300">
            Your survival depends on perfect timing and nerves of steel
          </p>
        </div>

        <div className="relative">
          {/* Game Controls */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={toggleFullscreen}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors duration-200 border border-gray-600"
              title="Toggle Fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-semibold"
            >
              <RotateCcw className="w-5 h-5 inline mr-2" />
              Restart
            </button>

            <button
              onClick={toggleMute}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors duration-200 border border-gray-600"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Game Container */}
          <div
            id="game-container"
            className="relative bg-black rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl"
            style={{ minHeight: '600px' }}
          >
            {renderGameContent()}
          </div>

          {/* Game Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50">
              <h4 className="text-white font-semibold mb-2">Current Score</h4>
              <p className="text-2xl font-bold text-yellow-400">{gameState.score}</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50">
              <h4 className="text-white font-semibold mb-2">High Score</h4>
              <p className="text-2xl font-bold text-green-400">{gameState.highScore}</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50">
              <h4 className="text-white font-semibold mb-2">Time Left</h4>
              <p className="text-2xl font-bold text-red-400">{gameState.timeLeft}s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};