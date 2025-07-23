import { game } from "../../constants/gameConfigs.js";
import { displayMessage } from "./displayMessage.js";

export const displayGameOver = () => {
  displayMessage("GAME OVER!");
  game.isRunning = false;
  game.isPaused = false;
};
