import { board, game, snake } from "../../constants/gameConfigs.js";
import { playPauseButtonElement, runResetButtonElement } from "../../game.js";

export const onStopGame = () => {
  console.log("game.tickIntervalId :::", game.tickIntervalId);

  // must be tested with detaching listeners
  window.removeEventListener("keydown", keybindingsGroup);
  playPauseButtonElement.removeEventListener("click", onPlayPauseGame);

  clearInterval(game.tickIntervalId);
  playPauseButtonElement.disabled = true;
  playPauseButtonElement.textContent = "Pause";
  runResetButtonElement.textContent = "Run";

  game = {
    ...game,
    isRunning: false,
    isPaused: false,
    isVictory: false,
    score: 0,
    tickIntervalId: null,
  };

  snake = {
    ...snake,
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
  };
};
