// an abstract class that defines an object
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255,100);

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, 35, 35);
  };
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };
}

// array that will contain all the bubble objects
var bubbles = [];


function setup() {
  createCanvas(600, 400);
  // creating all the different instances of the bubbles
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
  console.log(bubbles[0]);
}

// drawing
function draw() {
  background(0);
   for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
  }   
}