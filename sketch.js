function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 2, 150);
  fill(500,700,255)
  circle( mouseX,mouseY, 170, 130, 60);
  fill(23,165,0)
  quad(mouseX,mouseY,300, 31, 96, 50, 123, 200, 60, 76);
  fill( 108, 65, 255)
  rect(300, 100, 95, 135); 
}
