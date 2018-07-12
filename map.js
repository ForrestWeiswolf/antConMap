import mapbox from "mapbox-gl";

mapbox.accessToken = 'pk.eyJ1IjoiZm9ycmVzdHdlaXN3b2xmIiwiYSI6ImNqamlvYjhrYzFkbGYzcW14N3p1MndhYjUifQ.5ZKqFpNuNfIg50-k2l7gBA';

const map = new mapbox.Map({
	container: "map",
	center: [-73.969, 40.689],
	zoom: 11,
	style: "mapbox://styles/mapbox/streets-v10"
});

function createMarker(lat, long, color){
	console.log("marker at", lat, long)
	const marker = document.createElement('div')
	marker.className = 'marker'
  marker.style.width = '5px';
	marker.style.height = '5px';
	marker.style.borderRadius = '50%'
	marker.style.backgroundColor = color

  return new mapbox.Marker(marker).setLngLat([lat, long]).addTo(map)
}

export default {map, createMarker}