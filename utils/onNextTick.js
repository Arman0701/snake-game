import { game } from "../constants/gameConfigs.js";
import { onCheckGameOver } from "./check/onCheckGameOver.js";
import { onCheckVictory } from "./check/onCheckVictory.js";
import { onDrawFood } from "./draw/onDrawFood.js";
import { onDrawSnake } from "./draw/onDrawSnake.js";
import { onClearBoard } from "./game/onClearBoard.js";
import { onMoveSnake } from "./snake/onMoveSnake.js";

export const onNextTick = () => {
  // periodically update game state
  const { isPaused, isRunning, isVictory } = game;

  if (isRunning && !isPaused && !isVictory) {
    game.timeoutId = setTimeout(() => {
      onClearBoard();
      onCheckGameOver();
      onCheckVictory();
      onDrawFood();
      onDrawSnake();
      onMoveSnake();

      onNextTick();
    }, 200);
  }
};
