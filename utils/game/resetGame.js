import { board, game, snake } from "../../constants/gameConfigs.js";
import { playPauseButtonElement } from "../../game.js";
import { startGame } from "./startGame.js";

export const resetGame = () => {
  const { unitSize } = board;

  game.score = 0;
  snake.velocity.x = unitSize;
  snake.velocity.y = 0;
  snake.positions = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  playPauseButtonElement.disabled = false;
  clearInterval(game.tickIntervalId);

  startGame();
};
