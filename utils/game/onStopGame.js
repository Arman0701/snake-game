import { game } from "../../constants/gameConfigs.js";

export const onStopGame = () => {
  // whenever the game should be stopped by some reason
  game.isRunning = false;
  game.isOver = true;
  clearTimeout(game.timeoutId);
};
