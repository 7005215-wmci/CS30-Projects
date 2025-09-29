// CS30 Interactive Scene
// Kalim Pugh
// 9/29/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth)
  }
  cellSize = width/8
}

function draw() {
  background(220);
  chessboard();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth)
  }
  cellSize = width/8
}

function chessboard() {
  let isWhite = true;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y<8; y++){
      if (isWhite) {
        fill("white")
      }
      else{
        fill("black")
      }
      square(x*cellSize, y*cellSize, cellSize);
      isWhite = !isWhite;
    }
    isWhite = !isWhite
  }
}
