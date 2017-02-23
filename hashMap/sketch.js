// hash map for all words
var hash = [];
// hash map for all sorted words
var sorted = [];
var textX = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadStrings('poem.txt', callback);
}

function callback(poem) {
  // log the whole thing
  console.log(poem);
  
  // log the individual lines
  for(var i in poem) {
    console.log(i + ' : ' + poem[i]);
  }

  // go through each line
  for (i in poem) {
      // separate lines into words
      var li = poem[i].split(' ');
      
      // go through each letter in each word
      for (var k in li) {
          // replace each of the letters we don't want
          var clean = li[k].replace(/[.,-?!@#$%^&*()_~{}]/g, '');
          // add to the hash
          if (hash[clean] >= 1)
            hash[clean] += 1;
          else
            hash[clean] = 1;
      }
  }

  
  console.log('HASH ---------------');
  // this is the hash, unsorted but quantified
  for (i in hash)
    console.log(i + ' : ' + hash[i]);
    
  // console.log(hash[0]); // this numbered index will return 'undefined' in a hash map

  // make a copy of the hash
  for (var key in hash){
     sorted.push([key, hash[key]]);

  }

// custom sort function
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  sorted.sort(function(a, b) {
      a = a[1];
      b = b[1];

      // if b is higher than a, b gets a lower index
      if (a<b){ return 1;}
      // if b is lower than a, b gets a higher index
      else if (a > b){return -1;}
      // otherwise do nothing
      else return 0;
      // return a < b ? 1 : (a > b ? -1 : 0);
  });
  // now we have a sorted hash function
  console.log('HASH SORTED---------------');
  
  for(var i=0; i<sorted.length; i++)
      console.log(sorted[i][0] + ' : ' + sorted[i][1]);
}


function draw() {
    background(255);
    translate(textX, height/2);
    
    for(var i=0; i<sorted.length; i++) {
        var txtSize = sorted[i][1] * 30;
        textSize(txtSize);
        text(sorted[i][0], 0, 0);
        
        var txtWidth = textWidth(sorted[i][0]);
        translate(txtWidth, 0);
        
        if (mouseIsPressed)
            line(0, txtSize* .25, 0, -txtSize* .75);
    }
}

function mouseDragged() {
    textX += mouseX - pmouseX;
}