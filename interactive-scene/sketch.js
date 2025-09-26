// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let switches = 1;
let color = "black"

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(color)
  if (millis() > 2000 * switches + 28) {
    if (color === "yellow") {
      color = "black";
    }
    
    else {
      color = "yellow";
    }
    switches = switches + 1;
  }
  
}