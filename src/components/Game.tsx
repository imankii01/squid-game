import React, { useEffect, useState } from 'react';
import { GameUI } from './GameUI';
import { GameField } from './GameField';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { GameState } from '../types/game';

interface GameProps {
  gameState: GameState;
  onMovePlayer: (direction: 'forward' | 'backward') => void;
}

export const Game: React.FC<GameProps> = ({ gameState, onMovePlayer }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.isGameOver || !gameState.isPlaying) return;

      const key = e.key.toLowerCase();
      if (['arrowup', 'w', ' '].includes(key)) {
        e.preventDefault();
        if (!pressedKeys.has(key)) {
          setPressedKeys(prev => new Set([...prev, key]));
          onMovePlayer('forward');
          setIsMoving(true);
        }
      } else if (['arrowdown', 's'].includes(key)) {
        e.preventDefault();
        if (!pressedKeys.has(key)) {
          setPressedKeys(prev => new Set([...prev, key]));
          onMovePlayer('backward');
          setIsMoving(true);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
      setIsMoving(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState.isGameOver, gameState.isPlaying, pressedKeys, onMovePlayer]);

  const handleMouseMove = (direction: 'forward' | 'backward') => {
    if (gameState.isGameOver || !gameState.isPlaying) return;
    onMovePlayer(direction);
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 p-4">
      <GameUI
        timeLeft={gameState.timeLeft}
        score={gameState.score}
        highScore={gameState.highScore}
        playerPosition={gameState.playerPosition}
        currentLight={gameState.currentLight}
      />

      <div className="max-w-4xl mx-auto pt-48">
        <GameField
          playerPosition={gameState.playerPosition}
          currentLight={gameState.currentLight}
          isMoving={isMoving}
        />

        {/* Mobile Controls */}
        <div className="flex justify-center space-x-4 mt-8 md:hidden">
          <button
            onMouseDown={() => handleMouseMove('backward')}
            onTouchStart={() => handleMouseMove('backward')}
            className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-full transition-all duration-200 active:scale-95"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
          <button
            onMouseDown={() => handleMouseMove('forward')}
            onTouchStart={() => handleMouseMove('forward')}
            className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full transition-all duration-200 active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-white/70 text-sm">
          <p className="hidden md:block">Use ↑/W/Space to move forward • ↓/S to move backward</p>
          <p className="md:hidden">Use the buttons above to move</p>
        </div>
      </div>
    </div>
  );
};