import React from 'react';
import { User } from 'lucide-react';

interface PlayerProps {
  position: number;
  isMoving: boolean;
  currentLight: 'red' | 'green';
}

export const Player: React.FC<PlayerProps> = ({ position, isMoving, currentLight }) => {
  const leftPosition = `${position}%`;

  return (
    <div 
      className={`absolute bottom-20 transition-all duration-200 ${
        isMoving ? 'scale-110' : 'scale-100'
      }`}
      style={{ left: leftPosition, transform: 'translateX(-50%)' }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
        currentLight === 'red' 
          ? 'bg-red-500 border-2 border-red-300' 
          : 'bg-blue-500 border-2 border-blue-300'
      }`}>
        <User className="w-6 h-6 text-white" />
      </div>
      
      {/* Player shadow */}
      <div className="w-8 h-2 bg-black/40 rounded-full mt-1 mx-auto" />
    </div>
  );
};