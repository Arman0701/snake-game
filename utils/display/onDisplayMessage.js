import { board } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onDisplayMessage = (message) => {
  const { width, height } = board;

  context.font = "50px Arial";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText(message, width / 2, height / 2);
};
