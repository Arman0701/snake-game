import { unitSize, food } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDrawFood = () => {
  // draw a food cell on the board
  context.fillStyle = "red";
  context.fillRect(food.x * unitSize, food.y * unitSize, unitSize, unitSize);
};
