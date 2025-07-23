import { game } from "../../constants/gameConfigs.js";
import { displayMessage } from "./displayMessage.js";

export const displayGamePaused = () => {
  displayMessage("PAUSED!");
  game.isPaused = true;
};
