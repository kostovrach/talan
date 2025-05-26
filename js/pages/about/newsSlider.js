const newsPrevButton = document.querySelector(".news__nav-icon--prev");
const newsNextButton = document.querySelector(".news__nav-icon--next");
const newsCurrentCounter = document.querySelector(".news__counter--current");
const newsTotalCounter = document.querySelector(".news__counter--total");

function updateCounter(swiper) {
	if (!newsCurrentCounter || !newsTotalCounter) return;

	newsCurrentCounter.textContent = swiper.realIndex + 1;
	newsTotalCounter.textContent = swiper.slides.length;

	if (!swiper) return;

	newsPrevButton.classList.toggle("disable", swiper.isBeginning);
	newsNextButton.classList.toggle("disable", swiper.isEnd);
}

const newsSliderParams = {
	slidesPerView: "auto",
	navigation: {
		nextEl: ".news__nav-icon--next",
		prevEl: ".news__nav-icon--prev",
	},
	on: {
		init: updateCounter,
		slideChange: updateCounter,
	},
};
new Swiper(".news__slider", newsSliderParams);
