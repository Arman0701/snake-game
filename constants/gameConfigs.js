import { gameBoardElement } from "../game.js";

export const board = {
  width: gameBoardElement.width,
  height: gameBoardElement.height,
  backgroundColor: "white",
  boardBorderColor: "black",
  boardBorderSize: 2,
  unitSize: 25,
};

export const game = {
  isRunning: false,
  isPaused: false,
  isVictory: false,
  score: 0,
  tickFrequency: 200,
  tickIntervalId: null,
};

export const food = {
  x: 0,
  y: 0,
  color: "red",
};

export const snake = {
  directionChanged: false,
  positions: [
    { x: board.unitSize * 4, y: 0 },
    { x: board.unitSize * 3, y: 0 },
    { x: board.unitSize * 2, y: 0 },
    { x: board.unitSize, y: 0 },
    { x: 0, y: 0 },
  ],
  velocity: {
    x: board.unitSize,
    y: 0,
  },
  headColor: "green",
  bodyColor: "lightgreen",
  borderColor: "red",
  borderSize: 2,
};
