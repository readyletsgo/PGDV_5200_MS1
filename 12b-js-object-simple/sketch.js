// an abstract class that defines an object
function Bubble(x, y, number) {
  this.x = x;
  this.y = y;
  this.number = number;
  this.col = color(255,100);
  this.width = 35;
  this.height = 35;

  this.display = function() {
    noStroke();
    fill(this.col);
    // ellipse(this.x, this.y, 35, 35);
    rect(this.x, this.y, this.width, this.height);
    fill(0);  
    text(this.number, this.x+20, this.y+20);
  };
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    if(mouseX>this.x && mouseX< this.x+this.width 
      && mouseY > this.y && mouseY< this.y+this.height ){
      console.log(this.number);
    }



  };
}

// array that will contain all the bubble objects
var bubbles = [];


function setup() {
  createCanvas(600, 400);
  // creating all the different instances of the bubbles
  for (var i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(width), random(height), i);
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