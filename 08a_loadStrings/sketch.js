function setup() {
  createCanvas(windowWidth, windowHeight);
  loadStrings('poem.txt', callback);
}

function callback(poem) {
  // log the whole thing
  console.log(poem);
  
  // log the individual lines
  var yPos = 20;
  fill(0);
  for(var i in poem) {
    console.log(i + ' : ' + poem[i]);
    text(poem[i], 10, yPos);
    yPos+=20;

  }
}

