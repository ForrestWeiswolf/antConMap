import mapbox from 'mapbox-gl';

mapbox.accessToken = 'pk.eyJ1IjoiZm9ycmVzdHdlaXN3b2xmIiwiYSI6ImNqamlvYjhrYzFkbGYzcW14N3p1MndhYjUifQ.5ZKqFpNuNfIg50-k2l7gBA';

export const nycMap = new mapbox.Map({
	container: 'map',
	center: [-73.969, 40.689],
	zoom: 11,
	style: 'mapbox://styles/mapbox/streets-v10'
});

export function createMarker(lat, long, color, map, d){
	console.log('marker at', long, lat)
	const marker = d.createElement('div')
  marker.style.width = '5px';
	marker.style.height = '5px';
	marker.style.borderRadius = '50%'
	marker.style.backgroundColor = color

  return new mapbox.Marker(marker).setLngLat([long, lat]).addTo(map)
}
