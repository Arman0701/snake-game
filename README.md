# Snake Game

This is a classic Snake game implemented in JavaScript. The project features modular code, customizable settings, and a simple web interface for playing the game.

## Features

- Playable Snake game in the browser
- Modular code structure for easy maintenance
- Customizable board, snake, and game settings
- Docker support

## How to Run with Docker Compose

1. **Start the container using prebuilt image:**

   You may wait a bit longer to pull the image. It's just for first launch.

   ```bash
   # older version (version 1) of docker-compose
   docker-compose up

   # higher versions of docker-compose
   docker compose up
   ```

   This will build the Docker image and start the web service.

2. **Access the game:**

   Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── constants
│  ├── gameConfigs.js
│  └── keys.js
├── utils
│  ├── check
│  │  ├── onCheckGameOver.js
│  │  └── onCheckVictory.js
│  ├── display
│  │  ├── onDisplayGameOver.js
│  │  ├── onDisplayMessage.js
│  │  ├── onDisplayPaused.js
│  │  └── onDisplayVictory.js
│  ├── draw
│  │  ├── onDrawFood.js
│  │  └── onDrawSnake.js
│  ├── game
│  │  ├── onClearBoard.js
│  │  ├── onGameOver.js
│  │  ├── onPlayPauseGame.js
│  │  ├── onPrepareGame.js
│  │  ├── onResetGame.js
│  │  ├── onRunResetGame.js
│  │  ├── onStopGame.js
│  │  └── onVictory.js
│  ├── keyBindings
│  │  ├── index.js
│  │  ├── onPlayPauseAction.js
│  │  └── onRunResetAction.js
│  ├── snake
│  │  ├── onChangeDirection.js
│  │  ├── onCreateFood.js
│  │  └── onMoveSnake.js
│  └── onNextTick.js
├── .dockerignore
├── README.md
├── docker-compose.yml
├── game.js
├── index.html
├── index.js
└── style.css
```

## Requirements

- Docker
- Docker Compose

## Customization

You can change game settings in the config files under `constants/`

## License

MIT
