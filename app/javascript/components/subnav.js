import noUiSlider from 'nouislider';

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

function initRangeSlider() {
  console.log("hello from slider");
  const sliderContainer = document.getElementById('slider-container');
  console.log(sliderContainer);
  const slider = document.getElementById('slider-range');
  const range = document.querySelector('.range-bar');
  const minInput = document.querySelector('#min-price input');
  const maxInput = document.querySelector('#max-price input');
  const submitLink = document.querySelector('.submit_link');
  const submitButton = document.getElementById('subnav-form__submit');
  if (sliderContainer && slider) {
    sliderContainer.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    const min = JSON.parse(slider.dataset.min);
    const max = JSON.parse(slider.dataset.max);
    console.log(min);
    console.log(max);
      noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        step: 10,
        range: {
            'min': 0,
            'max': 600
        }
    });
    slider.noUiSlider.on('update', (values, handle) => {
      let value = values[handle];
      if (handle) {
        maxInput.value = '€' + value;
      } else {
        minInput.value = '€' + value;
      }
    });
    submitLink.addEventListener('click', (event) => {
      submitButton.click();
    });
  }
}

export { animateSubnavInput, initRangeSlider };
