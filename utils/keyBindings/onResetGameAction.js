import { KEYS } from "../../constants/keys.js";
import { onResetGame } from "../game/onResetGame.js";

export const onResetGameAction = (event) => {
  const keyPressed = event.keyCode;

  if (keyPressed === KEYS.Key_Space) {
    onResetGame();
  }
};
