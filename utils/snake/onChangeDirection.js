import { snake } from "../../constants/gameConfigs.js";
import { KEYS } from "../../constants/keys.js";

export const onChangeDirection = (e) => {
  // change the snake direction
  if (snake.isDirectionChanged) {
    return;
  }

  const movingUp = snake.velocity.y === -1;
  const movingDown = snake.velocity.y === 1;
  const movingLeft = snake.velocity.x === -1;
  const movingRight = snake.velocity.x === 1;

  const pressed = e.keyCode;

  if (
    (pressed === KEYS.Key_Arrow_Up || pressed === KEYS.Key_W) &&
    !movingDown
  ) {
    snake.direction = "up";
    snake.velocity.y = -1;
    snake.velocity.x = 0;
  }
  if (
    (pressed === KEYS.Key_Arrow_Down || pressed === KEYS.Key_S) &&
    !movingUp
  ) {
    snake.direction = "down";
    snake.velocity.y = 1;
    snake.velocity.x = 0;
  }
  if (
    (pressed === KEYS.Key_Arrow_Left || pressed === KEYS.Key_A) &&
    !movingRight
  ) {
    snake.direction = "left";
    snake.velocity.y = 0;
    snake.velocity.x = -1;
  }
  if (
    (pressed === KEYS.Key_Arrow_Right || pressed === KEYS.Key_D) &&
    !movingLeft
  ) {
    snake.direction = "right";
    snake.velocity.y = 0;
    snake.velocity.x = 1;
  }
  snake.isDirectionChanged = true;
};
