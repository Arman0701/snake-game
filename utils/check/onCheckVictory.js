import { game, snake } from "../../constants/gameConfigs.js";

export const onCheckVictory = () => {
  // check if user wins
  const { unitHeight, unitWidth } = game;
  const isVictory = snake.positions.length === unitHeight * unitWidth;
  if (isVictory) {
    onVictory();
  }
};
