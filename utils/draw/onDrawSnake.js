import { snake, unitSize } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDrawSnake = () => {
  // draw current snake cells on the board
  context.strokeStyle = "black";
  context.lineWidth = 1;

  snake.positions.forEach((cell, index) => {
    if (index === 0) {
      context.fillStyle = "lightgreen";
    } else {
      context.fillStyle = "green";
    }
    const bounds = [cell.x * unitSize, cell.y * unitSize, unitSize, unitSize];
    context.strokeRect(...bounds);
    context.fillRect(...bounds);
  });
};
