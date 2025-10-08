// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let dx; //or use xSpeed
let dy;
let r;
let g;
let b;
let radius = 75;

function setup() {
  createCanvas(400, 400);
  noStroke();
  x = width/2;
  y = height/2;
  dx = random(-3, 3);
  dy = random(-3, 3);
  randomizeColor();
}

function draw() {
  background("red");
  moveCircle();
  bounceIfNeeded();
  showCircle();
  // console.log(y);
}

function moveCircle() {
  x = x + dx;
  y += dy;
}

function bounceIfNeeded() {
  //should i bounce?
  if (x < 0 + radius || x > width - radius) {
    dx = dx * -1;
    randomizeColor();
  }
  if (y < 0 + radius || y > height - radius) {
    dy = dy * -1;
    randomizeColor();
  }
}

function randomizeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function showCircle() {
  fill(r, g, b);
  circle(x, y, radius*2);
}