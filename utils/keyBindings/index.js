import { onChangeDirection } from "../snake/onChangeDirection.js";
import { onPlayPauseAction } from "./onPlayPauseAction.js";
import { onRunResetAction } from "./onRunResetAction.js";

export const keyBindingsGroup = (e) => {
  onChangeDirection(e);
  onPlayPauseAction(e);
  onRunResetAction(e);
};
