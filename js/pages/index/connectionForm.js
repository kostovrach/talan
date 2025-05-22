document.addEventListener("DOMContentLoaded", function () {
	const select = document.querySelector(".connection__select");
	const input = select.querySelector(".connection__select-input");
	const dropdown = select.querySelector(".connection__select-dropdown");
	const items = dropdown.querySelectorAll(".connection__select-item");

	select.addEventListener("click", function (e) {
		select.classList.toggle("open");
	});
	items.forEach((item) => {
		item.addEventListener("click", function (e) {
			e.stopPropagation();
			input.value = this.textContent;
			select.classList.remove("open");
		});
	});
	items.forEach((item) => {
		item.addEventListener("keydown", function (e) {
			if (e.key === "Enter" || e.key === " ") {
				e.stopPropagation();
				input.value = this.textContent;
				select.classList.remove("open");
			}
		});
	});
	document.addEventListener("click", function (e) {
		if (!select.contains(e.target)) {
			select.classList.remove("open");
		}
	});
	select.addEventListener("keydown", function (e) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			select.classList.toggle("open");
		}
	});
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			select.classList.remove("open");
		}
	});
});
