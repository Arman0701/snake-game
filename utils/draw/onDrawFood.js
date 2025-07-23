import { board, food } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDrawFood = () => {
  const { x, y, color } = food;

  context.fillStyle = color;
  context.fillRect(x, y, board.unitSize, board.unitSize);
};
