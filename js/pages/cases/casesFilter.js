document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.cases__filter-item');
  const items = document.querySelectorAll('.js-cases-item');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const filterType = tag.getAttribute('data-type');

      items.forEach(item => {
        const itemType = item.getAttribute('data-type');

        if (filterType === 'all' || filterType === itemType) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});