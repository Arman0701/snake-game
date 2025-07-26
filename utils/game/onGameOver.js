import { onDisplayGameOver } from "../display/onDisplayGameOver.js";
import { onStopGame } from "./onStopGame.js";

export const onGameOver = () => {
  // do when game is over
  onStopGame();
  onDisplayGameOver();
};
