const docsPrevButton = document.querySelector(".docs__nav-icon--prev");
const docsNextButton = document.querySelector(".docs__nav-icon--next");
const docsCurrentCounter = document.querySelector(".docs__counter--current");
const docsTotalCounter = document.querySelector(".docs__counter--total");

function updateCounter(swiper) {
	if (!docsCurrentCounter || !docsTotalCounter) return;

	docsCurrentCounter.textContent = swiper.realIndex + 1;
	docsTotalCounter.textContent = swiper.slides.length;

	if (!swiper) return;

	docsPrevButton.classList.toggle("disable", swiper.isBeginning);
	docsNextButton.classList.toggle("disable", swiper.isEnd);
}

const docsSliderParams = {
	slidesPerView: "auto",
	navigation: {
		nextEl: ".docs__nav-icon--next",
		prevEl: ".docs__nav-icon--prev",
	},
	on: {
		init: updateCounter,
		slideChange: updateCounter,
	},
};
new Swiper(".docs__slider", docsSliderParams);
