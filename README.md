# Snake Game

A browser-based Snake game built with JavaScript and p5.js. This early learning project explores object-oriented programming, a frame-based game loop and keyboard-controlled movement.

## Features

- Start screen and game-over screen
- Arrow-key movement with protection against directly reversing direction
- Food collection, snake growth and score tracking
- Self-collision detection
- Restart without refreshing the page

## Play locally

Download or clone the repository, then open `index.html` in a web browser. Keep the JavaScript files and `libraries` folder alongside it.

Alternatively, serve the project using a local development server, such as VS Code's Live Server extension.

### Controls

| Key | Action |
| --- | --- |
| Enter | Start or restart the game |
| Arrow keys | Change direction |

Collect food to grow the snake and increase your score. Colliding with the snake's body ends the game. At the edge of the canvas, movement is constrained rather than wrapping around or immediately ending the game.

## How it works

- `index.html` loads p5.js and the game scripts.
- `sketch.js` manages the game states, keyboard input, food placement and score display.
- `snake.js` defines the `Snake` class, including movement, growth, drawing and self-collision detection.
- `style.css` provides basic page styling.

The game uses a 600 × 600 canvas with a 20-pixel grid and updates at 10 frames per second.

## Learning focus

This project provided practice with:

- Organising behaviour into a JavaScript class
- Using arrays to track the snake's body
- Managing start, playing and game-over states
- Processing keyboard input within a game loop
- Drawing and updating objects with p5.js

## Built with

- JavaScript
- [p5.js](https://p5js.org/)
- HTML and CSS
