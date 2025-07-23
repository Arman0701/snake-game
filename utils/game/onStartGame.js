import { game } from "../../constants/gameConfigs.js";
import {
  playPauseButtonElement,
  runResetButtonElement,
  scoreTextElement,
} from "../../game.js";
import { keybindingsGroup } from "../keyBindings/index.js";
import { onNextTick } from "../onNextTick.js";
import { onPlayPauseGame } from "./onPlayPauseGame.js";

export const onStartGame = () => {
  game.isRunning = true;
  game.isPaused = false;
  scoreTextElement.textContent = game.score;
  playPauseButtonElement.disabled = false;
  runResetButtonElement.textContent = game.isRunning ? "Reset" : "Run";

  window.addEventListener("keydown", keybindingsGroup);
  playPauseButtonElement.addEventListener("click", onPlayPauseGame);
  onNextTick();
};
