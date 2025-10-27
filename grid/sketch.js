// Grid Demo

//Learning 2d arrays

let theGrid = [[1, 0, 1, 0],
               [0, 0, 1, 1],
               [1, 1, 0, 0],
               [0, 1, 0, 1]];

let cellSize;
const SQUARE_DIMENSIONS = theGrid.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height){
    cellSize = height/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y=0; y < SQUARE_DIMENSIONS; y++){
    for (let x = 0; x < SQUARE_DIMENSIONS; x++){
      if (theGrid[y][x] === 1){
        fill("green");
      }
      else if (theGrid[y][x]===0){
        fill("blue");
      }
      square(x*cellSize, y*cellSize, cellSize); 
    }
  }
}

function mousePressed() { 
  let x= Math.floor(mouseX/cellSize);
  let y =Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}
function toggleCell(x, y) {
  if (theGrid[y][x] === 1) {
    theGrid[y][x] = 0;
  }
  else if (theGrid[y][x] === 0){
    theGrid[y][x] = 1;
  }
}

function generateRabdinGrid(cols, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y];
      }
    }
  }
}
