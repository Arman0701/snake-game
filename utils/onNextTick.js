import { game, snake } from "../constants/gameConfigs.js";
// import { playPauseButtonElement } from "../game.js";
import { onCheckGameOver } from "./check/onCheckGameOver.js";
import { onCheckVictory } from "./check/onCheckVictory.js";
// import { onDisplayGameOver } from "./display/onDisplayGameOver.js";
import { onDisplayGamePaused } from "./display/onDisplayGamePaused.js";
import { onDrawFood } from "./draw/onDrawFood.js";
import { onDrawSnake } from "./draw/onDrawSnake.js";
import { onClearBoard } from "./game/onClearBoard.js";
import { onMoveSnake } from "./snake/onMoveSnake.js";

export const onNextTick = () => {
  game.tickIntervalId = setInterval(() => {
    if (game.isRunning) {
      if (game.isPaused) {
        onDisplayGamePaused();
        return;
      }

      snake.directionChanged = false;
      onCheckVictory();
      onClearBoard();
      onDrawFood();
      onMoveSnake();
      onDrawSnake();
      onCheckGameOver();
    }
  }, game.tickFrequency);
};
