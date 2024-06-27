import { create } from 'zustand';
import { Store } from '../types/Store';

export const useGameStore = create<Store>((set) => ({
  gameStatus: 'home',
  setGameStatus: (gameStatus) => set({ gameStatus }),
}));
