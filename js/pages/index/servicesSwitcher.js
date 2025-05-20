const switcherItems = document.querySelectorAll('.services__switcher-item');
const serviceLists = document.querySelectorAll('.services__list');

switcherItems.forEach(item => {
	item.addEventListener('click', () => {
		const selectedType = item.dataset.type;

		switcherItems.forEach(btn => btn.classList.remove('active'));
		item.classList.add('active');

		serviceLists.forEach(list => {
			list.style.display = list.dataset.type === selectedType ? 'block' : 'none';
		});
	});
});
