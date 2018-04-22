// setup canvas
const canvas = document.querySelector('canvas');

// getContext: gives a context on which we can start drawing
// ctx: is the object that directly represents the drawing area of the canvas
// and allows us to draw 2D shapes on it
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

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

// I am added the draw method on th Ball prototype because I don't want it created on each ball instance
Ball.prototype.draw = function() {

    // start drawing the shape on the drawing area
    ctx.beginPath();

    ctx.fillStyle = this.color;

    // using arc to draw the ball on the drawing area.
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

    // finish drawing the path we started with beginPath
    // and fill the area it takes up with the color specified in fillStyle
    ctx.fill();
}

// the ball's movement is given from the update function
Ball.prototype.update = function() {

    // Checking if the ball has reached the edge of the canvas
    // If it has, I reverse the polarity of the relevant velocity
    // to make the ball travel in the opposite direction.

    // the ball is going off the right hand edge
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    // the ball is going off the left hand edge
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    
    // the ball is going off the bottom edge
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    // the ball is going off the top edge
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
    
} 

// empty array for storing all the balls
let balls = [];