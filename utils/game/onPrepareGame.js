import { onDrawFood } from "../draw/onDrawFood.js";
import { onDrawSnake } from "../draw/onDrawSnake.js";
import { onCreateFood } from "../snake/onCreateFood.js";
import { onClearBoard } from "./onClearBoard.js";

export const onPrepareGame = () => {
  // initialize the game
  // show initial state of snake
  onClearBoard();
  onCreateFood();
  onDrawFood();
  onDrawSnake();
};
