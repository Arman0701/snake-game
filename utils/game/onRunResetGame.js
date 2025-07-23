import { game } from "../../constants/gameConfigs.js";
import { onResetGame } from "./onResetGame.js";
import { onStartGame } from "./onStartGame.js";

export const onRunResetGame = () => {
  game.isRunning = !game.isRunning;

  if (game.isRunning) {
    onStartGame();
  } else {
    console.log("game.isRunning :::", game.isRunning);
    onResetGame();
  }
};
