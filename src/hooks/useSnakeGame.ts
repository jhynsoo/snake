/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { GameInfo } from '../types/GameInfo';
import { createFood } from '../utils/createFood';
import { initSnake } from '../utils/initSnake';
import { getNewDirection } from '../utils/getNewDirection';
import { updateBoard } from '../utils/updateBoard';
import { useGameStore } from '../store/Store';
import { Cell } from '../types/Cell';
import { createBoard } from '../utils/createBoard';

export default function useSnakeGame({
  row = 20,
  col = 20,
  refreshRate = 150,
  pixelSize = 20,
}: {
  row?: number;
  col?: number;
  refreshRate?: number;
  pixelSize?: number;
}) {
  const store = useGameStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialSnake = initSnake(col);
  const info: GameInfo = {
    board: createBoard(row, col),
    snake: initialSnake,
    food: createFood(row, col, initialSnake),
    direction: 'right',
    nextDirection: 'right',
  };

  function render(oldBoard: Cell[][], newBoard: Cell[][]) {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    newBoard.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (oldBoard[i][j] === cell) return;

        const x = j * pixelSize;
        const y = i * pixelSize;

        ctx.fillStyle = '#120';
        switch (cell) {
          case 'f':
            ctx.beginPath();
            ctx.arc(x + 10, y + 10, 8, 0, 2 * Math.PI);
            ctx.fill();
            break;
          case 's':
            ctx.fillRect(x, y, pixelSize, pixelSize);
            break;
          default:
            ctx.clearRect(x, y, pixelSize, pixelSize);
            break;
        }
      });
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = 400;
    canvas.height = 400;

    const handleKeydown = (e: KeyboardEvent) => {
      const direction = info.direction;
      const key = e.key;
      const newDirection = getNewDirection(direction, key);

      info.nextDirection = newDirection;
    };
    const interval = setInterval(() => {
      const oldBoard = info.board;
      if (!updateBoard(info)) {
        store.setGameStatus('over');
        return;
      }
      render(oldBoard, info.board);
    }, refreshRate);

    document.addEventListener('keydown', handleKeydown);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return canvasRef;
}
