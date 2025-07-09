import React from 'react';
import { Clock, Target, Trophy } from 'lucide-react';

interface GameUIProps {
  timeLeft: number;
  score: number;
  highScore: number;
  playerPosition: number;
  currentLight: 'red' | 'green';
}

export const GameUI: React.FC<GameUIProps> = ({
  timeLeft,
  score,
  highScore,
  playerPosition,
  currentLight,
}) => {
  const progressPercentage = (playerPosition / 100) * 100;

  return (
    <div className="absolute top-0 left-0 right-0 z-10 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Top Stats Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="flex items-center text-white">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span className="font-bold text-lg">{timeLeft}s</span>
              </div>
            </div>
            
            <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="flex items-center text-white">
                <Target className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="font-bold text-lg">{score}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <div className="flex items-center text-white">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-bold text-lg">{highScore}</span>
            </div>
          </div>
        </div>

        {/* Light Status */}
        <div className="text-center mb-4">
          <div className={`inline-block px-8 py-4 rounded-2xl font-bold text-2xl transition-all duration-300 ${
            currentLight === 'green' 
              ? 'bg-green-500 text-white animate-pulse' 
              : 'bg-red-500 text-white animate-pulse'
          }`}>
            {currentLight === 'green' ? '🟢 GREEN LIGHT' : '🔴 RED LIGHT'}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Progress</span>
            <span className="text-white font-semibold">{Math.floor(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};