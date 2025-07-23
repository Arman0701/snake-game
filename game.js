import { onPlayPauseGame } from "./utils/game/onPlayPauseGame.js";
import { onRunResetGame } from "./utils/game/onRunResetGame.js";
import { onPrepareBoard } from "./utils/game/onPrepareBoard.js";
import { keybindingsGroup } from "./utils/keyBindings/index.js";

export const gameBoardElement = document.querySelector("#gameBoard");
export const context = gameBoardElement.getContext("2d");
export const scoreTextElement = document.querySelector("#scoreText");
export const runResetButtonElement = document.querySelector("#runResetButton");
export const playPauseButtonElement =
  document.querySelector("#playPauseButton");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", keybindingsGroup);
  runResetButtonElement.addEventListener("click", onRunResetGame);
  playPauseButtonElement.addEventListener("click", onPlayPauseGame);

  onPrepareBoard();
});
