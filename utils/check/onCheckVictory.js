import { board, game, snake } from "../../constants/gameConfigs.js";
import { onDisplayVictory } from "../display/onDisplayVictory.js";

export const onCheckVictory = () => {
  const { positions } = snake;
  const { width, height } = board;
  const isVictory = positions.length === width * height;
  if (isVictory) {
    game.isVictory = true;
    onDisplayVictory();
  }
};
