import { board, game, snake } from "../../constants/gameConfigs.js";
import { playPauseButtonElement } from "../../game.js";
import { keybindingsGroup } from "../keyBindings/index.js";
import { onClearBoard } from "./onClearBoard.js";
import { onPlayPauseGame } from "./onPlayPauseGame.js";
import { onPrepareBoard } from "./onPrepareBoard.js";

export const onResetGame = () => {
  const { unitSize } = board;

  window.removeEventListener("keydown", keybindingsGroup);
  playPauseButtonElement.removeEventListener("click", onPlayPauseGame);

  game.isVictory = false;
  game.isRunning = false;
  game.isPaused = false;
  game.score = 0;
  snake.velocity.x = unitSize;
  snake.velocity.y = 0;
  snake.positions = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  playPauseButtonElement.disabled = true;
  clearInterval(game.tickIntervalId);
  onClearBoard();
  onPrepareBoard();
};
