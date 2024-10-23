var snake;
var scl = 20;
var food;
var score = 0;

// Define game states
const GAME_STATE = {
  START: 0,
  PLAYING: 1,
  GAME_OVER: 2
};
var currentState = GAME_STATE.START; // Initialize game state

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl) - 1;
  var rows = floor(height / scl) - 1;
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  console.log("Food position:", food.x, food.y);
}

function draw() {
  background(50);

  if (currentState === GAME_STATE.START) {
    drawStartScreen();
  } else if (currentState === GAME_STATE.PLAYING) {
    playGame();
  } else if (currentState === GAME_STATE.GAME_OVER) {
    drawEndScreen();
  }
}

function drawStartScreen() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Welcome to Snake Game!", width / 2, height / 2 - 20);
  textSize(20);
  text("Press ENTER to Start", width / 2, height / 2 + 20);
}

function drawEndScreen() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Game Over!", width / 2, height / 2 - 20);
  textSize(20);
  text("Your score: " + score, width / 2, height / 2 + 20);
  text("Press ENTER to Restart", width / 2, height / 2 + 60);
}

function playGame() {
  snake.death();
  snake.update();
  snake.show();
  
  if (snake.eat(food)) {
    pickLocation();
  }
  
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  // Draw the score
  fill(255);
  textSize(20);
  text("Score: " + score, 50, 30);
}

function keyPressed() {
  console.log("Key pressed:", keyCode);
  
  if (currentState === GAME_STATE.START) {
    if (keyCode === ENTER) {
      currentState = GAME_STATE.PLAYING; // Start the game
      score = 0; // Reset score
    }
  } else if (currentState === GAME_STATE.PLAYING) {
    if (keyCode === UP_ARROW) {
      snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      snake.dir(-1, 0);
    }
  } else if (currentState === GAME_STATE.GAME_OVER) {
    if (keyCode === ENTER) {
      resetGame(); // Reset the game
    }
  }
}

function resetGame() {
  snake = new Snake(); // Reset snake
  score = 0; // Reset score
  currentState = GAME_STATE.PLAYING; // Play again
}
