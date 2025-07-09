import { useSound } from './useSound';

export const useGameSounds = (isMuted: boolean) => {
  const greenLightSound = useSound({ 
    src: '/sounds/green-light.mp3', 
    volume: isMuted ? 0 : 0.7 
  });
  
  const redLightSound = useSound({ 
    src: '/sounds/red-light.mp3', 
    volume: isMuted ? 0 : 0.8 
  });
  
  const gameOverSound = useSound({ 
    src: '/sounds/game-over.mp3', 
    volume: isMuted ? 0 : 0.6 
  });
  
  const victorySound = useSound({ 
    src: '/sounds/victory.mp3', 
    volume: isMuted ? 0 : 0.7 
  });
  
  const backgroundMusic = useSound({ 
    src: '/sounds/background-music.mp3', 
    volume: isMuted ? 0 : 0.3, 
    loop: true 
  });

  return {
    greenLightSound,
    redLightSound,
    gameOverSound,
    victorySound,
    backgroundMusic,
  };
};