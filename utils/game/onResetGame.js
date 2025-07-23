import { onClearBoard } from "./onClearBoard.js";
import { onPrepareBoard } from "./onPrepareBoard.js";
import { onStopGame } from "./onStopGame.js";

export const onResetGame = () => {
  onStopGame();
  onClearBoard();
  onPrepareBoard();
};
