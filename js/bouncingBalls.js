// setup canvas
let canvas = document.querySelector('canvas');

// getContext: gives a context on which we can start drawing
// ctx: is the object that directly represents the drawing area of the canvas
// and allows us to draw 2D shapes on it
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// function to generate random number
function random(min,max) {
  let num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {

    // the horizontal and vertical coordinates where the ball will start on the screen
    this.x      = x;
    this.y      = y;

    // horizontal and vertical velocity, these values will be regularly added
    // to the x/y coordinate values when I start to animate the balls,
    // to move them by this much on each frame.
    this.velX   = velX;
    this.velY   = velY;

    this.color  = color;
    this.size   = size
}