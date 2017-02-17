function setup() {

// LEAFLET CODE
// create your own map
var mymap = L.map('mapid').setView([51.505, -0.09], 10);
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

var myIcon = L.icon({
    iconUrl: 'my-icon.png'
    // iconSize: [38, 95],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});


// Create a marker
var marker = L.marker([51.5, -0.09], {icon:myIcon}).addTo(mymap);



//Note that you create the marker, then afterwards add it to your map

// Create a circle
var circle = L.circle([51.508, -0.11], {
color: 'blue',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 1000
}).addTo(mymap);

//Note how we are passing along the formatting for the circle

// Create a polygon
var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
	]).addTo(mymap);

}

function draw() {
//nothing is happening in the draw loop

}