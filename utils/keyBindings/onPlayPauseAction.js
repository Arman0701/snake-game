import { KEYS } from "../../constants/keys.js";
import { onPlayPauseGame } from "../game/onPlayPauseGame.js";

export const onPlayPauseAction = (event) => {
  const keyPressed = event.keyCode;

  if (keyPressed === KEYS.Key_P) {
    onPlayPauseGame();
  }
};
