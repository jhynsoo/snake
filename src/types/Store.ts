import { GameStatus } from './GameStatus';

export type Store = {
  gameStatus: GameStatus;
  setGameStatus: (gameStatus: GameStatus) => void;
};
