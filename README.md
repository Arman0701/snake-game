# Snake Game

This is a classic Snake game implemented in JavaScript. The project features modular code, customizable settings, and a simple web interface for playing the game.

## Features

- Playable Snake game in the browser
- Modular code structure for easy maintenance
- Customizable board, snake, and game settings
- Docker support for easy deployment

## How to Run with Docker Compose

1. **Build and start the container:**

   ```bash
   docker-compose up --build
   ```

   This will build the Docker image and start the web service.

2. **Access the game:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `game.js` — Main game logic
- `constants/` — Game configuration files
- `utils/` — Utility functions for game features`
- `docker-compose.yml` — Docker Compose configuration

## Requirements

- Docker
- Docker Compose

## Customization

You can change game settings in the config files under `constants/`

## License

MIT
