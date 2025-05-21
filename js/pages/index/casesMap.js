const map = L.map("map").setView([54.5, 40.5], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const locations = {
	moscow: { name: "Москва", coords: [55.7558, 37.6173], count: 17 },
	samara: { name: "Самара", coords: [53.2038, 50.1606], count: 126 },
	saratov: { name: "Саратов", coords: [51.5331, 46.0342], count: 1 },
	saint_petersburg: { name: "Санкт-Петербург", coords: [59.9343, 30.3351], count: 2 },
	gomel: { name: "Гомель", coords: [52.4345, 30.9754], count: 6 },
	astana: { name: "Астана", coords: [51.1605, 71.4704], count: 3 },
	chelyabinsk: { name: "Челябинск", coords: [55.1644, 61.4368], count: 12 },
	voronezh: { name: "Воронеж", coords: [51.6755, 39.2089], count: 4 },
	tyumen: { name: "Тюмень", coords: [57.153, 65.5343], count: 1 },
	orenburg: { name: "Оренбург", coords: [51.7682, 55.0968], count: 32 },
	karaganda: { name: "Караганда", coords: [49.8047, 73.1094], count: 3 },
	perm: { name: "Пермь", coords: [58.0105, 56.2502], count: 2 },
	yekaterinburg: { name: "Екатеринбург", coords: [56.8389, 60.6057], count: 8 },
};

const markers = {};

function createStaticIcon(number) {
	return L.divIcon({
		className: "custom-marker",
		html: `<div class="cases__map-marker">${number}</div>`,
		iconSize: [32, 32],
		iconAnchor: [16, 16],
		popupAnchor: [0, -16],
	});
}

for (const [key, { coords, count, name }] of Object.entries(locations)) {
	const marker = L.marker(coords, {
		icon: createStaticIcon(count),
	})
		.addTo(map)
		.bindPopup(`${name} (${count})`);

	markers[key] = marker;
}

document.querySelectorAll(".cases__item").forEach((item) => {
	const loc = item.dataset.location;
	if (locations[loc]) {
		item.addEventListener("mouseenter", () => {
			const { coords } = locations[loc];
			map.flyTo(coords, 6);
			markers[loc].openPopup();
		});
	}
});
