import { food, snake, game } from "../../constants/gameConfigs.js";

export const onCreateFood = () => {
  // randomly generate a new position on the board where the food cell would be located
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let overlap = true;
  while (overlap) {
    food.x = getRandomNumber(0, game.unitWidth);
    food.y = getRandomNumber(0, game.unitHeight);

    overlap = snake.positions.find(({ x, y }) => food.x === x && food.y === y);
  }
};
