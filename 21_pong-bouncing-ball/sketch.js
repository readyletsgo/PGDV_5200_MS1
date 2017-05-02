var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  
    x = random(10, width-10);
    y = random(10, height-80);
    xSpeed = random(5, 5);
    ySpeed = random(5, 5);
 
}

function draw() {
  background(128, 128, 0);

  x+= xSpeed;
  y+= ySpeed;
  
    // left wall
    if (x <= 10)
      xSpeed *= -1;
    
    // right wall 
    if (x >= width-10)
      xSpeed *= -1;

    // top wall 
    if (y <= 10)
      ySpeed *= -1;

    // bottom wall 
    if (y >= height-10)
      ySpeed *= -1;
    

    // ball
    ellipse(x, y, 20, 20);
 
}
