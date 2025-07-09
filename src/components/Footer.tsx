import React from 'react';
import { Github, Heart, ExternalLink, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Squid Game Challenge
              <span className="block text-sm text-gray-400 font-normal mt-1">
                Created by Ankit (@imankii01)
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A fan-made tribute to the iconic Netflix series. Test your reflexes and survival instincts in this thrilling browser game with immersive sound effects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#game-section" className="text-gray-400 hover:text-white transition-colors">
                  Play Game
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect with Ankit</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/imankii01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                title="Follow @imankii01 on GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/imankii01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors"
                title="Follow @imankii01 on Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/imankii01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-500 p-3 rounded-lg transition-colors"
                title="Follow @imankii01 on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://netflix.com/title/81040344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-500 p-3 rounded-lg transition-colors"
                title="Watch Squid Game on Netflix"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Squid Game Challenge by Ankit (@imankii01). Fan-made project.
            </p>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                Made with <Heart className="w-4 h-4 inline text-red-500" /> by Ankit for fans of the series
              </p>
              <p className="text-xs text-gray-500">
                All rights belong to Netflix and the original creators of Squid Game.
                <br />
                This is an unofficial fan project by @imankii01 and is not affiliated with Netflix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};