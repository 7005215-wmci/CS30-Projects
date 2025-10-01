// Basic Drawing Program
// Kalim Pugh
// 9/29/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let shape = true;
let size = 10;
let colors = "black";

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("white");
}

function draw() {
  fill(colors);
  noStroke();
}

function mouseDragged() {
  if (shape === true){
    square(mouseX, mouseY, size);
  }

  else {
    circle(mouseX, mouseY, size);
  }
  
}

function keyPressed(){
  if (key === "r"){
    background("white");
  }
  
  else if (key === "q"){
    shape = !shape;
  }
  
  else if (key === "e") {
    size = size + 10;
  }
  
  else if (key === "w") {
    size = size - 10;
  }
  
  else if  (key === "t") {
    if (colors === "black"){
      colors = "blue";
    }
    
    else if (colors === "blue") {
      colors = "red";
    }
    
    else if (colors === "red"){
      colors = "green";
    }
    
    else if (colors === "green") {
      colors = "yellow";
    }
    
    else {
      colors = "black";
    }
  }
}