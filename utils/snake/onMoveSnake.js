import { food, game, snake } from "../../constants/gameConfigs.js";
import { scoreTextElement } from "../../game.js";
import { onCreateFood } from "./onCreateFood.js";

export const onMoveSnake = () => {
  const { positions, velocity } = snake;

  const head = {
    x: positions[0].x + velocity.x,
    y: positions[0].y + velocity.y,
  };

  snake.positions.unshift(head);
  const isFoodEaten = positions[0].x === food.x && positions[0].y === food.y;

  if (isFoodEaten) {
    game.score += 1;
    scoreTextElement.textContent = game.score;
    onCreateFood();
  } else {
    positions.pop();
  }
};
