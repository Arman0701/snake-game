import { onPlayPauseGame } from "./utils/game/onPlayPauseGame.js";
import { onPrepareGame } from "./utils/game/onPrepareGame.js";
import { onRunResetGame } from "./utils/game/onRunResetGame.js";
import { keyBindingsGroup } from "./utils/keyBindings/index.js";

export const runResetButton = document.querySelector("#runResetButton");
export const playPauseButton = document.querySelector("#playPauseButton");
export const boardElement = document.querySelector("#board");
export const scoreElement = document.querySelector("#score");
export const context = boardElement.getContext("2d");

window.addEventListener("DOMContentLoaded", () => {
  runResetButton.addEventListener("click", onRunResetGame);
  playPauseButton.addEventListener("click", onPlayPauseGame);

  document.addEventListener("keydown", keyBindingsGroup);

  onPrepareGame();
});
