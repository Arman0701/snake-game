import { game } from "../../constants/gameConfigs.js";
import { scoreTextElement } from "../../game.js";
import { createFood } from "../snake/createFood.js";
import { drawFood } from "../draw/drawFood.js";
import { nextTick } from "../nextTick.js";

const startGame = () => {
  game.isRunning = true;
  game.isPaused = false;
  scoreTextElement.textContent = game.score;
  createFood();
  drawFood();
  nextTick();
};

export { startGame };
