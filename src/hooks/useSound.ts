import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

interface SoundConfig {
  src: string;
  volume?: number;
  loop?: boolean;
}

export const useSound = (config: SoundConfig) => {
  const soundRef = useRef<Howl | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [config.src],
      volume: config.volume || 0.5,
      loop: config.loop || false,
      onload: () => setIsLoaded(true),
      onloaderror: (id, error) => {
        console.warn(`Failed to load sound: ${config.src}`, error);
      },
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [config.src, config.volume, config.loop]);

  const play = () => {
    if (soundRef.current && isLoaded) {
      soundRef.current.play();
    }
  };

  const stop = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  };

  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  };

  const setVolume = (volume: number) => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  };

  return { play, stop, pause, setVolume, isLoaded };
};