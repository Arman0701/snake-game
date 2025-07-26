import { KEYS } from "../../constants/keys.js";
import { onRunResetGame } from "../game/onRunResetGame.js";

export const onRunResetAction = (e) => {
  const pressed = e.keyCode;

  if (pressed === KEYS.Key_Space) {
    onRunResetGame();
  }
};
