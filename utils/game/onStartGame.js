import { game } from "../../constants/gameConfigs.js";
import { scoreTextElement } from "../../game.js";
import { onCreateFood } from "../snake/onCreateFood.js";
import { onDrawFood } from "../draw/onDrawFood.js";
import { onNextTick } from "../onNextTick.js";

export const onStartGame = () => {
  game.isRunning = true;
  game.isPaused = false;
  scoreTextElement.textContent = game.score;
  onCreateFood();
  onDrawFood();
  onNextTick();
};
