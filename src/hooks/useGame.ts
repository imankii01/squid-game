import { useState, useEffect, useCallback } from 'react';
import { GameState } from '../types/game';
import { useGameSounds } from './useGameSounds';

const GAME_DURATION = 30; // seconds
const FINISH_LINE = 100;

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isGameOver: false,
    currentLight: 'green',
    playerPosition: 0,
    score: 0,
    highScore: parseInt(localStorage.getItem('squifGameHighScore') || '0'),
    timeLeft: GAME_DURATION,
    gameStarted: false,
  });

  const [lightChangeTimer, setLightChangeTimer] = useState<NodeJS.Timeout | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const sounds = useGameSounds(isMuted);

  const startGame = useCallback(() => {
    sounds.backgroundMusic.play();
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      isGameOver: false,
      playerPosition: 0,
      score: 0,
      timeLeft: GAME_DURATION,
      gameStarted: true,
      currentLight: 'green',
    }));
  }, [sounds.backgroundMusic]);

  const endGame = useCallback((won: boolean = false) => {
    sounds.backgroundMusic.stop();
    
    if (won) {
      sounds.victorySound.play();
    } else {
      sounds.gameOverSound.play();
    }

    setGameState(prev => {
      const newScore = won ? prev.score + Math.floor(prev.timeLeft * 10) : prev.score;
      const newHighScore = Math.max(prev.highScore, newScore);
      
      if (newHighScore > prev.highScore) {
        localStorage.setItem('squifGameHighScore', newHighScore.toString());
      }

      return {
        ...prev,
        isPlaying: false,
        isGameOver: true,
        score: newScore,
        highScore: newHighScore,
      };
    });

    if (lightChangeTimer) {
      clearTimeout(lightChangeTimer);
    }
  }, [lightChangeTimer, sounds.backgroundMusic, sounds.victorySound, sounds.gameOverSound]);

  const movePlayer = useCallback((direction: 'forward' | 'backward') => {
    if (!gameState.isPlaying || gameState.isGameOver) return;

    if (gameState.currentLight === 'red') {
      endGame(false);
      return;
    }

    setGameState(prev => {
      const newPosition = direction === 'forward' 
        ? Math.min(prev.playerPosition + 2, FINISH_LINE)
        : Math.max(prev.playerPosition - 1, 0);

      const newScore = Math.max(0, Math.floor(newPosition / 2));

      if (newPosition >= FINISH_LINE) {
        setTimeout(() => endGame(true), 100);
      }

      return {
        ...prev,
        playerPosition: newPosition,
        score: newScore,
      };
    });
  }, [gameState.isPlaying, gameState.isGameOver, gameState.currentLight, endGame]);

  const resetGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isPlaying: false,
      isGameOver: false,
      playerPosition: 0,
      score: 0,
      timeLeft: GAME_DURATION,
      gameStarted: false,
      currentLight: 'green',
    }));

    if (lightChangeTimer) {
      clearTimeout(lightChangeTimer);
    }
  }, [lightChangeTimer, sounds.backgroundMusic]);

  // Game timer
  useEffect(() => {
    if (!gameState.isPlaying) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeLeft <= 1) {
          endGame(false);
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isPlaying, endGame]);

  // Light change logic
  useEffect(() => {
    if (!gameState.isPlaying) return;

    const scheduleNextLightChange = () => {
      const isCurrentlyGreen = gameState.currentLight === 'green';
      const nextDuration = isCurrentlyGreen 
        ? Math.random() * 3000 + 1000 // Red light: 1-4 seconds
        : Math.random() * 4000 + 2000; // Green light: 2-6 seconds

      const timer = setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          currentLight: prev.currentLight === 'green' ? 'red' : 'green',
        }));
        
        // Play sound effects for light changes
        if (gameState.currentLight === 'green') {
          sounds.redLightSound.play();
        } else {
          sounds.greenLightSound.play();
        }
      }, nextDuration);

      setLightChangeTimer(timer);
    };

    scheduleNextLightChange();

    return () => {
      if (lightChangeTimer) {
        clearTimeout(lightChangeTimer);
      }
    };
  }, [gameState.currentLight, gameState.isPlaying, sounds.greenLightSound, sounds.redLightSound]);

  return {
    gameState,
    startGame,
    endGame,
    movePlayer,
    resetGame,
    isMuted,
    setIsMuted,
  };
};