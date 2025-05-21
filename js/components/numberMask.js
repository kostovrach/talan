(function () {
	const input = document.getElementById("input-tel");
	const mask = "+7 (___) ___-__-__";
	const def = mask.replace(/\D/g, "");
	const pattern = mask.replace(/[_\d]/g, "_");
	let matrix = mask;

	function setCursorPosition(pos, el) {
		el.focus();
		if (el.setSelectionRange) {
			el.setSelectionRange(pos, pos);
		} else if (el.createTextRange) {
			const range = el.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	}

	function maskInput(event) {
		let i = 0;
		let val = input.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;

		input.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		});

		if (event.type === "blur") {
			if (input.value.length < 5) input.value = "";
		} else {
			setCursorPosition(input.value.length, input);
		}
	}

	input.addEventListener("input", maskInput, false);
	input.addEventListener("focus", maskInput, false);
	input.addEventListener("blur", maskInput, false);
	input.addEventListener("click", function () {
		if (input.selectionStart < 4) {
			setCursorPosition(4, input);
		}
	});
})();