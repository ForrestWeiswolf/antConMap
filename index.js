// import { map, createMarker } from './map.js'
import { antConCoordsPromise, bBuildCoordsPromise } from './api.js'

import mapbox from 'mapbox-gl';

mapbox.accessToken = 'pk.eyJ1IjoiZm9ycmVzdHdlaXN3b2xmIiwiYSI6ImNqamlvYjhrYzFkbGYzcW14N3p1MndhYjUifQ.5ZKqFpNuNfIg50-k2l7gBA';

const nycMap = new mapbox.Map({
	container: 'map',
	center: [-73.969, 40.689],
	zoom: 11,
	style: 'mapbox://styles/mapbox/light-v9'
});

function createMarker(lat, long, color, map) {
	const marker = document.createElement('div')
	marker.style.width = '5px';
	marker.style.height = '5px';
	marker.style.borderRadius = '50%'
	marker.style.backgroundColor = color

	return new mapbox.Marker(marker).setLngLat([long, lat]).addTo(map)
}

let totalLat = 0
let totalLong = 0
let numCoords = 0

const antConMarkers = antConCoordsPromise.then(coordList => {
	coordList.forEach(coords => {
		totalLat += parseFloat(coords[0])
		totalLong += parseFloat(coords[1])
		numCoords++
		createMarker(coords[0], coords[1], '#000090', nycMap)
	})
})

const bBuildMarkers = bBuildCoordsPromise.then(coordList => {
	coordList.forEach(coords => {
		totalLat += parseFloat(coords[0])
		totalLong += parseFloat(coords[1])
		numCoords++

		createMarker(coords[0], coords[1], '#900000', nycMap)
	})
})

Promise.all([antConMarkers, bBuildMarkers]).then(() => {
	const center = [totalLong / numCoords, totalLat / numCoords].map(coord => parseFloat(coord.toFixed(3)))
	console.log(center)
	nycMap.jumpTo({center})
})
