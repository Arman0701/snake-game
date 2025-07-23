import { game } from "../../constants/gameConfigs.js"; //
import { onDisplayGameOver } from "../display/onDisplayGameOver.js";
import { onStopGame } from "./onStopGame.js";

export const onGameOver = () => {
  clearInterval(game.tickIntervalId); //
  onStopGame();
  onDisplayGameOver();
};
