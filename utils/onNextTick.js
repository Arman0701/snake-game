import { game, snake } from "../constants/gameConfigs.js";
import { onCheckGameOver } from "./check/onCheckGameOver.js";
import { onCheckVictory } from "./check/onCheckVictory.js";
import { onDrawFood } from "./draw/onDrawFood.js";
import { onDrawSnake } from "./draw/onDrawSnake.js";
import { onClearBoard } from "./game/onClearBoard.js";
import { onMoveSnake } from "./snake/onMoveSnake.js";

export const onNextTick = () => {
  const { isPaused, isRunning, isVictory, tickFrequency } = game;

  game.tickIntervalId = setInterval(() => {
    if (isRunning && !isPaused && !isVictory) {
      snake.directionChanged = false;
      onCheckVictory();
      onClearBoard();
      onDrawFood();
      onMoveSnake();
      onDrawSnake();
      onCheckGameOver();
    }
  }, tickFrequency);
};
