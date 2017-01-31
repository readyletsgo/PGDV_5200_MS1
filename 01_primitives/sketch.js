// global variables to keep track of mouse positions
var x = [];
var y = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // center rectangles
    rectMode(CENTER);
    // half transparent red
    fill(255, 0, 0, 128);
}

function draw() {
    background(150);

    // line with one fixed end in coordinate system origin
    line(0, 0, mouseX, mouseY);

    // rectangle attached to mouse position
    rect(mouseX, mouseY, 100, 100, 10);
 
    // polygon   
    beginShape();
    for(var i=0; i<x.length; i++) {
        vertex(x[i], y[i]);
        text(i, x[i], y[i]);
    }
    endShape(CLOSE);
}

// register for mouse released events called exactly once each release
function mouseReleased() {
    // add x and y component into dedicated array
    x.push(mouseX);
    y.push(mouseY);
    console.log(x);
}