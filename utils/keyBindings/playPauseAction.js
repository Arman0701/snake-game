import { KEYS } from "../../constants/keys.js";
import { playPauseGame } from "../game/playPauseGame.js";

export const playPauseAction = (event) => {
  const keyPressed = event.keyCode;

  if (keyPressed === KEYS.Key_P) {
    playPauseGame();
  }
};
