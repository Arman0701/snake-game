import { game } from "../../constants/gameConfigs.js";
import { playPauseButtonElement } from "../../game.js";
import { onDisplayGameOver } from "../display/onDisplayGameOver.js";

export const onGameOver = () => {
  game.isRunning = false;
  game.isPaused = false;
  playPauseButtonElement.disabled = true;

  onDisplayGameOver();
};
