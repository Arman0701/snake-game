import { snake } from "../../constants/gameConfigs.js";
import { onGameOver } from "../game/onGameOver.js";

export const onCheckGameOver = () => {
  // check is game over or not
  const [head] = snake.positions;

  // case: Snake head has overlap with the body
  snake.positions.slice(1).forEach(({ x, y }) => {
    if (head.x === x && head.y === y) {
      onGameOver();
      return;
    }
  });
};
