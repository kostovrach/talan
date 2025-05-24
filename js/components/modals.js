document.addEventListener("DOMContentLoaded", () => {
	let scrollPosition = 0;

	function handleScrollReturn() {
		document.body.classList.remove("block-scroll");
		document.body.style.removeProperty("top");
		document.body.style.removeProperty("position");
		document.body.style.removeProperty("width");
		window.scrollTo(0, scrollPosition);
	}

	function handleScrollBlock() {
		scrollPosition = window.pageYOffset;
		document.body.classList.add("block-scroll");
		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollPosition}px`;
		document.body.style.width = "100%";
	}

	document.querySelectorAll("[data-dropdown-open]").forEach((button) => {
		const dropdown = document.querySelector("#dropdown");

		button.addEventListener("click", () => {
			const isActive = dropdown.classList.contains("active");

			if (isActive) {
				dropdown.classList.remove("active");
				button.classList.remove("active");
				handleScrollReturn();
			} else {
				dropdown.classList.add("active");
				button.classList.add("active");
				handleScrollBlock();
			}
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && dropdown.classList.contains("active")) {
				dropdown.classList.remove("active");
				button.classList.remove("active");
				handleScrollReturn();
			}
		});

		const switcherItems = dropdown.querySelectorAll(".dropdown__switcher-item");
		const serviceLists = dropdown.querySelectorAll(".dropdown__list");

		switcherItems.forEach((item) => {
			item.addEventListener("click", () => {
				const selectedType = item.dataset.type;

				switcherItems.forEach((btn) => btn.classList.remove("active"));
				item.classList.add("active");

				serviceLists.forEach((list) => {
					list.style.display = list.dataset.type === selectedType ? "flex" : "none";
				});
			});
		});
	});
});
