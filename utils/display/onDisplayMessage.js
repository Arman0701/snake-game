import { game, unitSize } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDisplayMessage = (message) => {
  const { unitHeight, unitWidth } = game;

  context.font = "50px Arial";
  context.textAlign = "center";
  context.fillStyle = "black";
  context.fillText(
    message,
    (unitWidth / 2) * unitSize,
    (unitHeight / 2) * unitSize
  );
};
