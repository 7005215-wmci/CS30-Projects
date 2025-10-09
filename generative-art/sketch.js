// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tileSize = 50;
let someTile;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTile = spawnTile(width/2, height/2);
}

function draw() {
  background(220);

  line(someTile.x1, someTile.y1, someTile.x2, timeTile.y2);
}

function spawmTile(x, y) {
  let choice = random(100);
  let tile;
  if (choice > 50) {
    //positive slope
    tile = {
      x1: x - tileSize/2,
      y1: y + tileSize/2,
      x2: x + tileSize/2,
      y2: y - tileSize/2,

    };
  }

  else {
    //negative slope
    tile = {
      x1: x + tileSize/2,
      y1: y - tileSize/2,
      x2: x - tileSize/2,
      y2: y + tileSize/2,

    };
    return(tile);
  }
} 
