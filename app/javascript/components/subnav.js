function animateSubnavInput() {
  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');
  const searchDiv = document.querySelector('.search');
  if (searchInput && searchIcon) {
  console.log('hello from searchbar');
    searchDiv.addEventListener('click', (event) => {
      searchIcon.classList.remove('is-visible');
      searchInput.classList.add('is-visible');
    });
    searchDiv.addEventListener('focusout', (event) => {
      searchIcon.classList.add('is-visible');
      searchInput.classList.remove('is-visible');
    });
  }
}

export { animateSubnavInput };
