// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(34, 139, 34);
  if(keyIsDown(87) === true){
    y -= 5;
  }
  
  if(keyIsDown(83) === true){
    y += 5;
  }

  if(keyIsDown(65) === true){
    x -= 5;
  }

  if(keyIsDown(68) === true){
    x += 5;
  }
  fill("black");
  square(x, y , 50);
}
