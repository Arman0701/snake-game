import { game, unitSize } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onClearBoard = () => {
  // remove everything drawn
  context.fillStyle = "white";
  context.fillRect(0, 0, game.unitWidth * unitSize, game.unitHeight * unitSize);
};
