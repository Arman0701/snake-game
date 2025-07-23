import { board } from "../../constants/gameConfigs.js";
import { context } from "../../game.js";

export const onClearBoard = () => {
  context.fillStyle = board.backgroundColor;
  context.fillRect(0, 0, board.width, board.height);
};
