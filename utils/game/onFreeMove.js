import { game, snake } from "../../constants/gameConfigs.js";

export const onFreeMove = () => {
  const { direction } = snake;
  const { unitHeight, unitWidth } = game;
  snake.isDirectionChanged = true;

  snake.positions = snake.positions.map((cell) => {
    const [head] = snake.positions;

    if (cell.y < 0 && direction === "up") {
      cell.y = unitWidth - 1;
      cell.x = head.x;
    }

    if (cell.y > unitHeight - 1 && direction === "down") {
      cell.y = 0;
      cell.x = head.x;
    }

    if (cell.x < 0 && direction === "left") {
      cell.x = unitWidth - 1;
      cell.y = head.y;
    }

    if (cell.x > unitWidth - 1 && direction === "right") {
      cell.x = 0;
      cell.y = head.y;
    }

    return cell;
  });
};
