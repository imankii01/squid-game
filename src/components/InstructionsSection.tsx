import React from 'react';
import { Play, Square, Clock, Trophy } from 'lucide-react';

export const InstructionsSection: React.FC = () => {
  const instructions = [
    {
      icon: <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse" />,
      title: "Green Light",
      description: "Move forward quickly when the light is green. Every step counts towards victory."
    },
    {
      icon: <Square className="w-8 h-8 text-red-500" />,
      title: "Red Light",
      description: "Stop immediately when the light turns red. Any movement means elimination."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "Beat the Clock",
      description: "Reach the finish line before time runs out. Speed and timing are everything."
    },
    {
      icon: <Trophy className="w-8 h-8 text-gold-500" />,
      title: "Survive & Win",
      description: "Only the smartest and fastest players will survive this deadly game."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            GAME RULES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master these simple rules to survive the deadliest children's game ever created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-full mb-4 mx-auto group-hover:bg-gray-600/50 transition-colors">
                {instruction.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {instruction.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {instruction.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ WARNING</h3>
            <p className="text-gray-300 text-lg">
              This game requires quick reflexes and perfect timing. 
              <span className="block text-red-400 font-semibold mt-2">
                One wrong move and you're eliminated.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};