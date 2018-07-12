import mapbox from "mapbox-gl";

mapbox.accessToken = 'pk.eyJ1IjoiZm9ycmVzdHdlaXN3b2xmIiwiYSI6ImNqamlvYjhrYzFkbGYzcW14N3p1MndhYjUifQ.5ZKqFpNuNfIg50-k2l7gBA';

const map = new mapbox.Map({
	container: "map",
	center: [-73.969, 40.689],
	zoom: 11,
	style: "mapbox://styles/mapbox/streets-v10"
});
