import { board, snake } from "../../constants/gameConfigs.js";
import { onGameOver } from "../game/onGameOver.js";

export const onCheckGameOver = () => {
  const {
    positions: [snakeHead],
  } = snake;
  const { width, height } = board;

  switch (true) {
    case snakeHead.x < 0:
    case snakeHead.x >= width:
    case snakeHead.y < 0:
    case snakeHead.y >= height:
      console.log("Switch");
      onGameOver();
      break;
  }

  for (let i = 1; i < snake.positions.length; i++) {
    if (
      snake.positions[i].x == snakeHead.x &&
      snake.positions[i].y == snakeHead.y
    ) {
      onGameOver();
    }
  }
};
