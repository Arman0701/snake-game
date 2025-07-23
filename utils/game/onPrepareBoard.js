import { playPauseButtonElement, runResetButtonElement } from "../../game.js";
import { onDrawFood } from "../draw/onDrawFood.js";
import { onDrawSnake } from "../draw/onDrawSnake.js";
import { onCreateFood } from "../snake/onCreateFood.js";

export const onPrepareBoard = () => {
  onCreateFood();
  onDrawFood();
  onDrawSnake();
  playPauseButtonElement.disabled = true;
  runResetButtonElement.textContent = "Run";
};
