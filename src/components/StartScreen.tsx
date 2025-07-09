import React from 'react';
import { Play, Trophy, Target } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  highScore: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, highScore }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-md w-full bg-black/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-500/30">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-12 h-12 text-red-500 mr-2" />
            <div>
              <h1 className="text-4xl font-bold text-white">Squid Game</h1>
              <p className="text-xs text-gray-500">Created by Ankit (@imankii01)</p>
            </div>
          </div>
          <p className="text-red-400 text-lg font-medium">Red-Green Survival</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4">
            <h2 className="text-white font-semibold mb-2 flex items-center">
              <Play className="w-5 h-5 mr-2 text-green-400" />
              How to Play
            </h2>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Move forward during <span className="text-green-400 font-medium">GREEN LIGHT</span></li>
              <li>• Stop immediately during <span className="text-red-400 font-medium">RED LIGHT</span></li>
              <li>• Reach the finish line before time runs out</li>
              <li>• Moving during red light = elimination</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
              High Score
            </h3>
            <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <Play className="w-6 h-6 inline mr-2" />
          Start Game
        </button>
      </div>
    </div>
  );
};