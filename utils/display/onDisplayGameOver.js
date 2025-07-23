import { game } from "../../constants/gameConfigs.js";
import { onDisplayMessage } from "./onDisplayMessage.js";

export const onDisplayGameOver = () => {
  onDisplayMessage("GAME OVER!");
  game.isRunning = false;
  game.isPaused = false;
};
