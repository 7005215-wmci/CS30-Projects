// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theGrid = [];
let cellSize;

function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
    cellSize = windowHeight/10;
  }
  else{
    createCanvas(windowHeight, windowHeight);
    windowHeight/10;
  }
}

function draw() {
  background(220);
  generateMap();
}

function generateMap(){
  for (let y = 0; y < 10; y ++) {
    for (let x = 0; x < 10; x++ ){
      square(x*cellSize, y*cellSize, cellSize);
    }
  }

}
