import { Cell } from './Cell';
import { Coord } from './Coord';
import { Direction } from './Direction';
import { Snake } from './Snake';

export type GameInfo = {
  board: Cell[][];
  snake: Snake;
  food: Coord;
  direction: Direction;
  nextDirection: Direction;
};
