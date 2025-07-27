import { game, snake } from "../../constants/gameConfigs.js";
import { onGameOver } from "../game/onGameOver.js";

export const onCheckGameOver = () => {
  // check is game over or not
  const [head] = snake.positions;
  const { unitHeight, unitWidth } = game;

  switch (true) {
    case head.x < 0:
    case head.x >= unitWidth:
    case head.y < 0:
    case head.y >= unitHeight:
      onGameOver();
      break;
  }

  // case: Snake head has overlap with the body
  snake.positions.slice(1).forEach(({ x, y }) => {
    if (head.x === x && head.y === y) {
      onGameOver();
      return;
    }
  });
};
