import { food, game, snake } from "../../constants/gameConfigs.js";
import { scoreElement } from "../../game.js";
import { onPrepareGame } from "./onPrepareGame.js";

export const onResetGame = () => {
  // do actions they should reset the game
  game.score = 0;
  game.isRunning = false;
  game.isVictory = false;
  game.isPaused = false;
  game.timeoutId = null;
  game.isOver = false;

  snake.direction = "right";
  snake.isDirectionChanged = false;
  snake.positions = [
    { x: 4, y: 0 },
    { x: 3, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ];
  snake.velocity = {
    x: 1,
    y: 0,
  };

  food.x = 0;
  food.y = 0;

  playPauseButton.disabled = true;
  playPauseButton.textContent = "Pause";
  runResetButton.textContent = "Run";
  scoreElement.textContent = "0";

  onPrepareGame();
};
