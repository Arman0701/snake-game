import { food, game, snake } from "../../constants/gameConfigs.js";
import { scoreElement } from "../../game.js";
import { onCreateFood } from "./onCreateFood.js";

export const onMoveSnake = () => {
  // calculate new position of snake
  const head = {
    x: snake.velocity.x + snake.positions[0].x,
    y: snake.velocity.y + snake.positions[0].y,
  };

  const isFoodEaten = head.x === food.x && head.y === food.y;
  snake.positions.unshift(head);
  if (isFoodEaten) {
    game.score += 1;
    scoreElement.textContent = game.score;
    onCreateFood();
  } else {
    snake.positions.pop();
  }
  snake.isDirectionChanged = false;
};
