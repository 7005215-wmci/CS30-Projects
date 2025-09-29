// Basic Drawing Program
// Kalim Pugh
// 9/29/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth,windowHeight);
  background("white");
}

function draw() {
  fill("black");
}

function mouseClicked() {
  circle(mouseX, mouseY, 15);
}