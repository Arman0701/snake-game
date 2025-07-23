import { game } from "../../constants/gameConfigs.js";

export const onGameOver = () => {
  game.isRunning = false;
  game.isPaused = false;
};
