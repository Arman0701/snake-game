import { game } from "../../constants/gameConfigs.js";
import { onDisplayVictory } from "../display/onDisplayVictory.js";

export const onVictory = () => {
  // do when user wins
  game.isVictory = true;
  game.isRunning = false;
  clearTimeout(game.timeoutId);
  onDisplayVictory();
};
