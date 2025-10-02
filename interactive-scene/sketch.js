// Basic Drawing Program
// Kalim Pugh
// 9/29/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Creates the State Variables
let shape = true;
let size = 10;
let colors = "black";
let safe = true;


// Prepares the Application's GUI.

function setup() {
  createCanvas(500, 700);
  background("gray");
  createMenu();
}

function draw() {
  fill(colors);
  noStroke();
}

// Detects if the Mouse is clicker or dragged in an area it shouldn't be, if so it does not allow it to draw.

function mouseDragged() {
  if (mouseY < 100  + size/2) {
    safe = false;
  }
 
  else {
    safe = true;
  }

  canDraw();
}

function mouseClicked(){
  if (mouseY < 100  + size/2) {
    safe = false;
  }
 
  else {
    safe = true;
  }
  canDraw();
}


function canDraw(){
  if (safe === true) {
    if (shape === true){
      square(mouseX - size/2, mouseY - size/2, size);
    }

    else {
      circle(mouseX, mouseY, size);
    }
  }
}

// HotKey Functions that I added to change colors, size, or shape faster.

function keyPressed(){
  if (key === "r"){
    background("gray");
    createMenu();
  }
  
  else if (key === "q"){
    shape = !shape;
  }
  
  else if (key === "e") {
    size = size + 10;
  }
  
  else if (key === "w") {
    size = size - 10;
    if (size < 10) {
      size = 10;
    }
  }  
  // I intend to switch these into some kinda of array format to shorten code & add more colors. 
  
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

    else if (colors === "yellow"){
      colors = "white";
    }
    
    else {
      colors = "black";
    }
  }
}

// These Next functions will create the border and GUI the user can interact with.

function createMenu(){
  fill("black");
  rect(0, 90, 500, 10);
}