import { game, snake } from "../constants/gameConfigs.js";
import { playPauseButtonElement } from "../game.js";
import { checkGameOver } from "./check/checkGameOver.js";
import { checkVictory } from "./check/checkVictory.js";
import { displayGameOver } from "./display/displayGameOver.js";
import { displayGamePaused } from "./display/displayGamePaused.js";
import { drawFood } from "./draw/drawFood.js";
import { drawSnake } from "./draw/drawSnake.js";
import { clearBoard } from "./game/clearBoard.js";
import { moveSnake } from "./snake/moveSnake.js";

export const nextTick = () => {
  game.tickIntervalId = setInterval(() => {
    if (!game.isRunning) {
      displayGameOver();
      playPauseButtonElement.disabled = true;
      return;
    }

    if (game.isPaused) {
      displayGamePaused();
      return;
    }

    snake.directionChanged = false;
    checkVictory();
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    checkGameOver();
  }, game.tickFrequency);
};
