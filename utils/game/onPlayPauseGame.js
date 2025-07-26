import { game } from "../../constants/gameConfigs.js";
import { playPauseButton } from "../../game.js";
import { onDisplayPaused } from "../display/onDisplayPaused.js";
import { onNextTick } from "../onNextTick.js";

export const onPlayPauseGame = () => {
  // toggle game play/pause state
  game.isPaused = !game.isPaused;

  if (!game.isRunning) {
    return;
  }

  if (game.isPaused) {
    onDisplayPaused();
    clearTimeout(game.timeoutId);
    playPauseButton.textContent = "Play";
  } else {
    playPauseButton.textContent = "Pause";
    onNextTick();
  }
};
