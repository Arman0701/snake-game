import { startGame } from "./utils/game/startGame.js";
import { resetGame } from "./utils/game/resetGame.js";
import { playPauseGame } from "./utils/game/playPauseGame.js";
import { changeDirection } from "./utils/snake/changeDirection.js";
import { playPauseAction } from "./utils/keyBindings/playPauseAction.js";
import { resetGameAction } from "./utils/keyBindings/resetGameAction.js";

export const gameBoardElement = document.querySelector("#gameBoard");
export const context = gameBoardElement.getContext("2d");
export const scoreTextElement = document.querySelector("#scoreText");
export const resetButtonElement = document.querySelector("#resetButton");
export const playPauseButtonElement =
  document.querySelector("#playPauseButton");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", (e) => {
    changeDirection(e);
    playPauseAction(e);
    resetGameAction(e);
  });
  resetButtonElement.addEventListener("click", resetGame);
  playPauseButtonElement.addEventListener("click", playPauseGame);

  startGame();
});
