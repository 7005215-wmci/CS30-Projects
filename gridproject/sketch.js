// Snake
// Kalim Pugh
// November 5, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theGrid = [0,0];
let cellSize;
let rows = 10;
let columns = 10;

function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = windowHeight/10;
  }
  else{
    createCanvas(windowHeight, windowHeight);
    cellSize = windowHeight/10;
  }
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
    theGrid[1] = theGrid[1] + 1;
  }

  else if (key === 'a') {
    theGrid[1] = theGrid[1] - 1;
  }
  else if (key === 'w') {
    theGrid[0] = theGrid[0] - 1;
  }
  else if (key === 's') {
    theGrid[0] === theGrid[0] + 1;
  }
}
