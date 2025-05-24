(function () {
	const inputs = document.querySelectorAll('[data-type="input-tel"]');
	const mask = "+7 (___) ___-__-__";
	const def = mask.replace(/\D/g, "");

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

	function createMask(event) {
		const input = event.target;
		let i = 0;
		let val = input.value.replace(/\D/g, "");

		if (def.length >= val.length) val = def;

		input.value = mask.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		});

		if (event.type === "blur") {
			if (input.value.length < 5) input.value = "";
		} else {
			setCursorPosition(input.value.length, input);
		}
	}

	inputs.forEach((input) => {
		input.addEventListener("input", createMask, false);
		input.addEventListener("focus", createMask, false);
		input.addEventListener("blur", createMask, false);
		input.addEventListener("click", function () {
			if (input.selectionStart < 4) {
				setCursorPosition(4, input);
			}
		});
	});
})();
