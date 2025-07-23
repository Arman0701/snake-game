import { board, food, snake } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDrawSnake = () => {
  const { bodyColor, borderColor, borderSize, positions } = snake;

  context.fillStyle = bodyColor;
  context.strokeStyle = borderColor;
  context.lineWidth = borderSize;

  positions.forEach(({ x, y }, index) => {
    if (food.x === x && food.y === y) {
      context.fillStyle = food.color;
    } else {
      context.fillStyle = bodyColor;
    }
    context.fillRect(x, y, board.unitSize, board.unitSize);
    context.strokeRect(x, y, board.unitSize, board.unitSize);
  });
};
