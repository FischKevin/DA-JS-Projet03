document.addEventListener('DOMContentLoaded', () => {
  const heartIcons = document.querySelectorAll('.fa-regular');

  function toggleHeart(event) {
    event.stopPropagation();

    event.preventDefault();

    this.classList.toggle('filled');
  }

  heartIcons.forEach((icon) => {
    icon.addEventListener('click', toggleHeart);
  });
});
