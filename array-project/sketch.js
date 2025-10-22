// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 100;
let y = 100;
let oldY;
let oldX;
let pStats = {
  speed: 5,
  color: "black",
  direction: "north",
  terrarain: "flat",
  tSpeed: 1,
  energy: 100,
};

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  if (x > 275 && y > 275){
    pStats.tSpeed = 0.4;
  }
  else {
    pStats.tSpeed = 1;
  }
  background(34, 139, 34);
  fill( '#857F7B' );
  square(300, 300, 200);
  if(keyIsDown(87) === true){
    oldY= y;
    y -= pStats.speed * pStats.tSpeed;
    pStats.direction = "north";
  }
  
  if(keyIsDown(83) === true){
    oldY= y;
    y += pStats.speed * pStats.tSpeed;
    pStats.direction = "south";
  }

  if(keyIsDown(65) === true){
    oldX = x;
    x -= pStats.speed * pStats.tSpeed;
    pStats.direction = "west";
  }

  if(keyIsDown(68) === true){
    oldX =x;
    x += pStats.speed * pStats.tSpeed;
    pStats.direction = "east";
  }
  movement();
}

function movement() {
  fill("black");
  if(x < 22 || y < 25 || x > 475|| y > 475) {
    x = oldX;
    y = oldY;
  }
  square(x - 25 ,y - 25 , 50);
  console.log(pStats.direction);
}