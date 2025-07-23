import { game } from "../../constants/gameConfigs.js";
import { playPauseButtonElement } from "../../game.js";
import { nextTick } from "../nextTick.js";

export const playPauseGame = () => {
  game.isPaused = !game.isPaused;
  playPauseButtonElement.textContent = game.isPaused ? "Play" : "Pause";
  clearInterval(game.tickIntervalId);
  nextTick();
};
