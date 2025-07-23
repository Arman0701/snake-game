import { onStartGame } from "./utils/game/onStartGame.js";
import { onResetGame } from "./utils/game/onResetGame.js";
import { onPlayPauseGame } from "./utils/game/onPlayPauseGame.js";
import { onChangeDirection } from "./utils/snake/onChangeDirection.js";
import { onPlayPauseAction } from "./utils/keyBindings/onPlayPauseAction.js";
import { onResetGameAction } from "./utils/keyBindings/onResetGameAction.js";

export const gameBoardElement = document.querySelector("#gameBoard");
export const context = gameBoardElement.getContext("2d");
export const scoreTextElement = document.querySelector("#scoreText");
export const resetButtonElement = document.querySelector("#resetButton");
export const playPauseButtonElement =
  document.querySelector("#playPauseButton");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", (e) => {
    onChangeDirection(e);
    onPlayPauseAction(e);
    onResetGameAction(e);
  });
  resetButtonElement.addEventListener("click", onResetGame);
  playPauseButtonElement.addEventListener("click", onPlayPauseGame);

  onStartGame();
});
