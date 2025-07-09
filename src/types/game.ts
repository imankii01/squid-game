export interface GameState {
  isPlaying: boolean;
  isGameOver: boolean;
  currentLight: 'red' | 'green';
  playerPosition: number;
  score: number;
  highScore: number;
  timeLeft: number;
  gameStarted: boolean;
}

export interface Player {
  position: number;
  isMoving: boolean;
  isEliminated: boolean;
}