import { board, game, snake } from "../../constants/gameConfigs.js";
import { playPauseButtonElement, runResetButtonElement } from "../../game.js";
import { keybindingsGroup } from "../keyBindings/index.js";
import { onPlayPauseGame } from "./onPlayPauseGame.js";

export const onStopGame = () => {
  window.removeEventListener("keydown", keybindingsGroup);
  playPauseButtonElement.removeEventListener("click", onPlayPauseGame);

  clearInterval(game.tickIntervalId);
  playPauseButtonElement.disabled = true;
  playPauseButtonElement.textContent = "Pause";
  runResetButtonElement.textContent = "Run";

  game.isRunning = false;
  game.isPaused = false;
  game.isVictory = false;
  game.score = 0;
  game.tickIntervalId = null;

  snake.directionChanged = false;
  snake.positions = [
    { x: board.unitSize * 4, y: 0 },
    { x: board.unitSize * 3, y: 0 },
    { x: board.unitSize * 2, y: 0 },
    { x: board.unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  snake.velocity = {
    x: board.unitSize,
    y: 0,
  };
};
