import React from 'react';
import { RotateCcw, Trophy, Skull } from 'lucide-react';

interface GameOverScreenProps {
  score: number;
  highScore: number;
  isNewHighScore: boolean;
  onRestart: () => void;
  onBackToMenu: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  highScore,
  isNewHighScore,
  onRestart,
  onBackToMenu,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-md w-full bg-black/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-500/30">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Skull className="w-12 h-12 text-red-500 mr-2" />
            <h1 className="text-4xl font-bold text-white">Game Over</h1>
          </div>
          <p className="text-red-400 text-lg">Better luck next time!</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 text-center">
            <h2 className="text-white font-semibold mb-2">Final Score</h2>
            <p className="text-3xl font-bold text-yellow-400">{score}</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 text-center">
            <h3 className="text-white font-semibold mb-2 flex items-center justify-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
              High Score
            </h3>
            <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
            {isNewHighScore && (
              <p className="text-green-400 text-sm mt-2 font-medium">🎉 New High Score!</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-6 h-6 inline mr-2" />
            Play Again
          </button>
          
          <button
            onClick={onBackToMenu}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};