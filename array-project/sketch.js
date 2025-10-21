// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let oldY;
let oldX;
let pStats = {
  speed: 5,
  color: "black",
  direction: "north",

};

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(34, 139, 34);
  fill( '#857F7B' );
  square(300, 300, 200);
  if(keyIsDown(87) === true){
    oldY= y;
    y -= pStats.speed;
    pStats.direction = "north";
  }
  
  if(keyIsDown(83) === true){
    oldY= y;
    y += pStats.speed;
    pStats.direction = "south";
  }

  if(keyIsDown(65) === true){
    oldX = x;
    x -= pStats.speed;
    pStats.direction = "west";
  }

  if(keyIsDown(68) === true){
    oldX =x;
    x += pStats.speed;
    pStats.direction = "east";
  }
  fill("black");
  if(x < 0 || y < 0 || x > 450|| y > 450) {
    x = oldX;
    y = oldY;
  }
  square(x ,y , 50);
}