import { game } from "../../constants/gameConfigs.js";
import { onDisplayMessage } from "./onDisplayMessage.js";

export const onDisplayGamePaused = () => {
  onDisplayMessage("PAUSED!");
  game.isPaused = true;
};
