import { KEYS } from "../../constants/keys.js";
import { onPlayPauseGame } from "../game/onPlayPauseGame.js";

export const onPlayPauseAction = (e) => {
  const pressed = e.keyCode;

  if (pressed === KEYS.Key_P) {
    onPlayPauseGame();
  }
};
