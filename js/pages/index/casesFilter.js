document.addEventListener("DOMContentLoaded", () => {
	const filterItems = document.querySelectorAll(".cases__filter-item");
	const caseItems = document.querySelectorAll(".cases__item");

	const defaultType = "administrative";

	filterItems.forEach((f) => {
		const type = f.getAttribute("data-type");
		f.classList.toggle("active", type === defaultType);
	});

	caseItems.forEach((item) => {
		const types = item.getAttribute("data-type").split(" ");
		item.style.display = types.includes(defaultType) ? "" : "none";
	});

	filterItems.forEach((filter) => {
		filter.addEventListener("click", () => {
			const selectedType = filter.getAttribute("data-type");

			filterItems.forEach((f) => f.classList.remove("active"));
			filter.classList.add("active");

			caseItems.forEach((item) => {
				const itemTypes = item.getAttribute("data-type").split(" ");
				item.style.display = itemTypes.includes(selectedType) ? "" : "none";
			});
		});
	});
});
