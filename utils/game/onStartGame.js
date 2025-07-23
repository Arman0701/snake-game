import { game } from "../../constants/gameConfigs.js";
import {
  playPauseButtonElement,
  runResetButtonElement,
  scoreTextElement,
} from "../../game.js";
import { onNextTick } from "../onNextTick.js";

export const onStartGame = () => {
  game.isRunning = true;
  game.isPaused = false;
  scoreTextElement.textContent = game.score;
  playPauseButtonElement.disabled = false;
  runResetButtonElement.textContent = game.isRunning ? "Reset" : "Run";

  onNextTick();
};
