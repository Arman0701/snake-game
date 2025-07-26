import { boardElement } from "../game.js";

export const unitSize = 20;
export const game = {
  score: 0,
  unitHeight: Math.floor(boardElement.height / unitSize),
  unitWidth: Math.floor(boardElement.width / unitSize),
  isRunning: false,
  isOver: false,
  isVictory: false,
  isPaused: false,
  timeoutId: null,
};

export const snake = {
  direction: "right",
  isDirectionChanged: false,
  positions: [
    { x: 4, y: 0 },
    { x: 3, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ],
  velocity: {
    x: 1,
    y: 0,
  },
};

export const food = {
  x: 0,
  y: 0,
};
