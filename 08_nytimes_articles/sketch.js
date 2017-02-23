// NYTIMES Example
// Adopted from Daniel Shiffman http://shiffman.net/a2z

// API documentation
// http://developer.nytimes.com
// Weirdly it seems to work with 'sample-key'
// But you should probably get your own

function setup() {
  createCanvas(800, 600);
  search();
}

// Run the API call
function search() {
  var term = "Trees";

  // URL for querying the times
  var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.jsonp?' 
  + 'callback=svc_search_v2_articlesearch&api-key=41553f34c5234f16b68507c8ab48160a' + '&q=' + term;

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  println(data);

  // Go through and show some results
  docs = data.response.docs;

  var xPos = 20;  
  var yPos = 20;
  // Iterate through the articles in "docs"
  for (var i = 0; i < docs.length; i++) {
    
    // Make each headline a link to the article
    textStyle(BOLD);
    text(docs[i].headline.main, 20, yPos);
    textStyle(NORMAL);
    text(docs[i].snippet, 20, yPos+10 , 400, yPos + 70);
    yPos = yPos+ 120;
  }
}