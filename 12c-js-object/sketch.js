// an abstract class that defines an object
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  
  this.lifespan = 255;
  this.col = color(255,this.lifespan);

  this.display = function() {
    noStroke();
    // stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 35, 35);
  };

  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.lifespan -= random(3);
    this.col = color(255,this.lifespan);
  };

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    }
    return false;
  }
}

var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
  console.log(bubbles[0]);
}

function draw() {
  background(0);
  //have problems when looping through forwards if we're adjusting through the array
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].update();
    if (bubbles[i].isFinished()) {
      bubbles.splice(i,1);
    }
  }
  
  
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}