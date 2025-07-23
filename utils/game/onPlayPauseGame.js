import { game } from "../../constants/gameConfigs.js";
import { playPauseButtonElement } from "../../game.js";
import { onNextTick } from "../onNextTick.js";

export const onPlayPauseGame = () => {
  game.isPaused = !game.isPaused;
  playPauseButtonElement.textContent = game.isPaused ? "Play" : "Pause";
  clearInterval(game.tickIntervalId);
  onNextTick();
};
