import { KEYS } from "../../constants/keys.js";
import { resetGame } from "../game/resetGame.js";

export const resetGameAction = (event) => {
  const keyPressed = event.keyCode;

  if (keyPressed === KEYS.Key_Space) {
    resetGame();
  }
};
