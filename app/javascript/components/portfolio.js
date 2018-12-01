import { tns } from 'tiny-slider/src/tiny-slider';
  function slider() {
    const leftChevron = document.querySelector('.chevron-left');
    const rightChevron = document.querySelector('.chevron-right');
    if (rightChevron && leftChevron) {
      rightChevron.addEventListener('click', {})
      const slider = tns({
        container: '#js-projects',
        items: 1,
        controls: false,
        nav: false,
        responsive: {
          640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
          },
          700: {
            gutter: 30
          },
          900: {
            items: 2
          }
        }
      });
      leftChevron.addEventListener('click', (event) => {
        slider.goTo('prev');
      });
      rightChevron.addEventListener('click', (event) => {
        slider.goTo('next');
      });
    }
  }

export { slider };
