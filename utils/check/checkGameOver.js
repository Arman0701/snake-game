import { board, game, snake } from "../../constants/gameConfigs.js";

export const checkGameOver = () => {
  const {
    positions: [snakeHead],
  } = snake;
  const { width, height } = board;

  switch (true) {
    case snakeHead.x < 0:
    case snakeHead.x >= width:
    case snakeHead.y < 0:
    case snakeHead.y >= height:
      game.isRunning = false;
      break;
  }

  for (let i = 1; i < snake.positions.length; i++) {
    if (
      snake.positions[i].x == snakeHead.x &&
      snake.positions[i].y == snakeHead.y
    ) {
      game.isRunning = false;
    }
  }
};
