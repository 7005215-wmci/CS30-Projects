// Snake
// Kalim Pugh
// November 5, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

setInterval(movement, 350);
let theGrid = [0,0];
let snakeCells = [];
let snakeSize = 0;
let cellSize;
let fruit = [8,8];
let rows = 10;
let columns = 10;
let direction = "east";

function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = windowHeight/10;
  }
  else{
    createCanvas(windowHeight, windowHeight);
    cellSize = windowHeight/10;
  }
  spawnFruit();
}



function draw(){
  background(220);
  generateMap();
}

function generateMap(){
  for (let y = 0; y < columns; y ++) {
    for (let x = 0; x < rows; x++ ){
      if (y === theGrid[0] && x === theGrid[1]){
        fill("#088F8F");
      }
      else if (y === fruit[1] && x === fruit[0]){
        fill("#D2042D");
      }
      else{
        fill("#8A9A5B");
      }
      square(x*cellSize, y*cellSize, cellSize);
    }
  }

}

function windowResized(){
  setup();
  draw();
}

function keyPressed(){
  if(key === 'd') {
    if (direction === "north"){
      direction = "east";
    }
    else if (direction === "south"){
      direction = "east";
    }
  }
  else if (key === 'a') {
    if (direction === "north"){
      direction = "west";
    }
    else if (direction === "south") {
      direction = "west";
    }
  }
  else if (key === 'w') {
    if (direction === "west"){
      direction = "north";
    }
    else if (direction === "east") {
      direction = "north";
    }
  }
  else if (key === 's') {
    if (direction === "west"){
      direction = "south";
    }
    else if (direction === "east"){
      direction = "south";
    }
  }
}

function movement(){
  if (direction === "north"){
    theGrid[0] = theGrid[0] - 1;
  }
  else if (direction === "south") {
    theGrid[0] = theGrid[0] + 1;
  }
  else if (direction === "west"){
    theGrid[1] = theGrid[1] - 1;
  }
  else if (direction === "east"){
    theGrid[1] = theGrid[1] + 1;
  }
  if (theGrid[1] === fruit[0] && theGrid[0] === fruit[1]){
    spawnFruit();
    snakeSize = snakeSize + 1;
  }
}

function spawnFruit(){
  fruit[0] = Math.round(random(0,9));
  fruit[1] = Math.round(random(0,9));
  if (theGrid[1] === fruit[0] && theGrid[0] === fruit[1]){
    spawnFruit();
  }
  console.log(snakeSize);
}