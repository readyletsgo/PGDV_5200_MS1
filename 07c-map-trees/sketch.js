

var latitudes, longitudes, table, mymap;
var species, conditions;

function preload(){
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/1995_street_tree_census_e.csv", "csv", "header");

}
function setup() {

// LEAFLET CODE
// create your own map
mymap = L.map('mapid').setView([40.763801, -73.980121], 16);
/*
creat your own map called "mymap".
"L" refers to leaflet, so whenever you want to interact with the library
you have to precede it with L. This code does the following:
Leaflet: L
create a map: map('mapid')
set the center and zoom level: setView([latitude, longitude], zoomlevel);
*/

// get the tiles you need. You don't have to touch this
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	id: 'mapbox.streets'
	}).addTo(mymap);
	drawDataPoints();
}

function drawDataPoints(){

	latitudes = table.getColumn("Latitude");
  	longitudes = table.getColumn("Longitude");
  	species = table.getColumn("Species");
  	conditions = table.getColumn("Condition");
  // cycle through array
  console.log(latitudes[0]);
	  for(var i=0; i<5000; i++){
	  	var col = 'orange';
	  	if(conditions[i]==="Good" || conditions[i]==="Excellent"){
	  		col = 'green';
	  	}else if(conditions[i]==="Poor"){
	  		col= 'red';
	  	}

    	var circle = L.circle([latitudes[i], longitudes[i]], {
      	radius: 20,
      	stroke: false,
      	fillColor: col,
      	fillOpacity: 0.5
	    }).addTo(mymap)
	    .bindPopup("Species: " + species[i] + " Condition: " + conditions[i]);
	}
}



function draw() {
//nothing is happening in the draw loop

}