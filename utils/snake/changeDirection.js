import { board, snake } from "../../constants/gameConfigs.js";
import { KEYS } from "../../constants/keys.js";

export const changeDirection = (event) => {
  if (snake.directionChanged) {
    // to allow only one direction change per game tick
    return;
  }

  snake.directionChanged = true;
  const keyPressed = event.keyCode;

  const goingUp = snake.velocity.y === -board.unitSize;
  const goingDown = snake.velocity.y === board.unitSize;
  const goingRight = snake.velocity.x === board.unitSize;
  const goingLeft = snake.velocity.x === -board.unitSize;

  switch (true) {
    case (keyPressed === KEYS.Key_Arrow_Left && !goingRight) ||
      (keyPressed === KEYS.Key_A && !goingRight):
      snake.velocity.x = -board.unitSize;
      snake.velocity.y = 0;
      break;
    case (keyPressed === KEYS.Key_Arrow_Up && !goingDown) ||
      (keyPressed === KEYS.Key_W && !goingDown):
      snake.velocity.x = 0;
      snake.velocity.y = -board.unitSize;
      break;
    case (keyPressed === KEYS.Key_Arrow_Right && !goingLeft) ||
      (keyPressed === KEYS.Key_D && !goingLeft):
      snake.velocity.x = board.unitSize;
      snake.velocity.y = 0;
      break;
    case (keyPressed === KEYS.Key_Arrow_Down && !goingUp) ||
      (keyPressed === KEYS.Key_S && !goingUp):
      snake.velocity.x = 0;
      snake.velocity.y = board.unitSize;
      break;
  }
};
