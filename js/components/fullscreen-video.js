document.addEventListener("DOMContentLoaded", function () {
	const dialog = document.getElementById("popup-video");
	const dialogVideo = document.getElementById("fullscreen-video");
	const closeBtn = dialog.querySelector(".popup-video__closeBtn");

	document.querySelectorAll(".article__chapter-video-control").forEach((control) => {
		control.addEventListener("click", function () {
			const originalVideo = this.closest(".article__chapter-video-wrapper")?.querySelector("video");
			if (!originalVideo) return;

			const source = originalVideo.querySelector("source");
			if (!source) return;

			dialogVideo.src = source.src;
			dialogVideo.load();
			//dialogVideo.play();

			dialog.showModal();
		});
	});

	closeBtn.addEventListener("click", () => {
		dialog.close();
		dialogVideo.pause();
		dialogVideo.src = "";
		document.exitFullscreen?.();
	});

	document.addEventListener("fullscreenchange", () => {
		if (!document.fullscreenElement && dialog.open) {
			dialog.close();
			dialogVideo.pause();
			dialogVideo.src = "";
		}
	});

	dialog.addEventListener("click", (e) => {
		if (e.target === dialog) {
			dialog.close();
			dialogVideo.pause();
			dialogVideo.src = "";
			document.exitFullscreen?.();
		}
	});
});
