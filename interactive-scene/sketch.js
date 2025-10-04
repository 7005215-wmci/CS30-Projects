// Basic Drawing Program
// Kalim Pugh
// 9/29/2025
//
// Extra for Experts:
// Tried working with Mutiple state Variables. Ran out of time to create a
// Refresh button and Size buttons. To increase Size press E, to decrease
// Press W. To Refresh press R. To Change color via hotkey Press T. To 
// Change Shapes via Hotkey press Q.


// Creates the State Variables
let shape = true;
let size = 10;
let colors = "black";
let safe = true;


// Prepares the Application's GUI.

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  createMenu();
}

function draw() {
  fill(colors);
  noStroke();
}

// Detects if the Mouse is clicker or dragged in an area it shouldn't be, if so it does not allow it to draw.

function mouseDragged() {
  if (mouseY < 70  + size/2) {
    safe = false;
  }
 
  else {
    safe = true;
  }

  canDraw();
}

function mouseClicked(){
  if (mouseY < 70  + size/2) {
    safe = false;
  }
  
  else {
    safe = true;
  }
  canDraw();
  
  if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
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
    fill(colors);
    stroke("black");
    square(10, 10, 30);
  }
  else if (mouseX > 60 && mouseX < 90 && mouseY > 10 && mouseY < 40){
    shapeChanged();
  }
}
function canDraw(){
  if (safe === true) {
    noStroke();
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
    background("white");
    createMenu();
  }
  
  else if (key === "q"){
    shapeChanged()
  }
  
  else if (key === "e") {
    size = size + 10;
    if (size > 80){
      size = 80;
    }
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
    fill(colors);
    square(10,10,30);
  }
}

// These Next functions will create the border and GUI the user can interact with.

function createMenu(){
  stroke("black");
  fill("black");
  rect(0, 60, windowWidth, 10);
  fill(colors);
  square(10,10,30);
  fill("white");
  square(60, 10, 30);
  if (shape === true) {
      fill("black");
      square(70, 20, 10);
    }
    else {
      fill("black");
      circle(75,25,20);
    }
}
function shapeChanged() {
  shape = !shape;
  fill("white");
  square(60, 10, 30);
  if (shape === true) {
      fill("black");
      square(70, 20, 10);
    }
    else {
      fill("black");
      circle(75,25,20);
    }
}
