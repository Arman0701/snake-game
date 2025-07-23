import { board, game, snake } from "../../constants/gameConfigs.js";
import { onDisplayVictory } from "../display/onDisplayVictory.js";
import { onStopGame } from "../game/onStopGame.js";

export const onCheckVictory = () => {
  const { positions } = snake;
  const { width, height } = board;
  const isVictory = positions.length === width * height;
  if (isVictory) {
    game.isVictory = true;
    onDisplayVictory();
    onStopGame();
  }
};
