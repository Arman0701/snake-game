import { game } from "../../constants/gameConfigs.js";
import { playPauseButton } from "../../game.js";
import { onNextTick } from "../onNextTick.js";
import { onResetGame } from "./onResetGame.js";

export const onRunResetGame = () => {
  game.isRunning = !game.isRunning;

  if (game.isRunning && !game.isOver) {
    onNextTick();
    playPauseButton.disabled = false;
    runResetButton.textContent = "Reset";
  } else {
    onResetGame();
  }
};
