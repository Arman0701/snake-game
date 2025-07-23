// constants
import "./constants/gameConfigs.js";
import "./constants/keys.js";

// game
import "./game.js";

// UTILITY FUNCTIONS
// checks
import "./utils/check/onCheckGameOver.js";
import "./utils/check/onCheckVictory.js";

// display
import "./utils/display/onDisplayGameOver.js";
import "./utils/display/onDisplayGamePaused.js";
import "./utils/display/onDisplayMessage.js";
import "./utils/display/onDisplayVictory.js";

// draw
import "./utils/draw/onDrawFood.js";
import "./utils/draw/onDrawSnake.js";

// game
import "./utils/game/onClearBoard.js";
import "./utils/game/onGameOver.js";
import "./utils/game/onPlayPauseGame.js";
import "./utils/game/onResetGame.js";
import "./utils/game/onRunResetGame.js";
import "./utils/game/onStartGame.js";

// key binding actions
import "./utils/keyBindings/index.js";
import "./utils/keyBindings/onPlayPauseAction.js";
import "./utils/keyBindings/onResetGameAction.js";

// snake
import "./utils/snake/onChangeDirection.js";
import "./utils/snake/onCreateFood.js";
import "./utils/snake/onMoveSnake.js";

// common functions
import "./utils/onNextTick.js";
