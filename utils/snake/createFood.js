import { board, food, snake } from "../../constants/gameConfigs.js";

export const createFood = () => {
  const possiblePositions = [];
  for (let x = 0; x < board.width; x += board.unitSize) {
    for (let y = 0; y < board.height; y += board.unitSize) {
      possiblePositions.push({ x, y });
    }
  }

  const snakeSet = new Set(snake.positions.map(({ x, y }) => `${x},${y}`));
  const freePositions = possiblePositions.filter(
    (pos) => !snakeSet.has(`${pos.x},${pos.y}`)
  );

  if (freePositions.length > 0) {
    const index = Math.floor(Math.random() * freePositions.length);
    food.x = freePositions[index].x;
    food.y = freePositions[index].y;
  }
};
