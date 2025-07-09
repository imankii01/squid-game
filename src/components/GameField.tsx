import React from 'react';
import { Player } from './Player';
import { Flag } from 'lucide-react';

interface GameFieldProps {
  playerPosition: number;
  currentLight: 'red' | 'green';
  isMoving: boolean;
}

export const GameField: React.FC<GameFieldProps> = ({
  playerPosition,
  currentLight,
  isMoving,
}) => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-white/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Start line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
      
      {/* Finish line */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-500 flex items-center justify-center">
        <div className="bg-red-500 rounded-full p-2 -mr-6">
          <Flag className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Distance markers */}
      {[25, 50, 75].map((distance) => (
        <div
          key={distance}
          className="absolute top-0 bottom-0 w-0.5 bg-white/30"
          style={{ left: `${distance}%` }}
        />
      ))}

      {/* Player */}
      <Player 
        position={playerPosition} 
        isMoving={isMoving} 
        currentLight={currentLight}
      />
    </div>
  );
};