import { onChangeDirection } from "../snake/onChangeDirection.js";
import { onPlayPauseAction } from "./onPlayPauseAction.js";
import { onResetGameAction } from "./onResetGameAction.js";

export const keybindingsGroup = (e) => {
  onChangeDirection(e);
  onPlayPauseAction(e);
  onResetGameAction(e);
};
