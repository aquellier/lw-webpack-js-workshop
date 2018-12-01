import 'bootstrap';
import './application.css';
import { loadDynamicBannerText } from '../components/banner';
const homePage = document.querySelector('.pages.home');
if (homePage) {
  loadDynamicBannerText();
}
import { navbarScroll } from '../components/navbar';
navbarScroll();
import { launchAutoComplete } from '../components/autocomplete';
if (homePage) {
  launchAutoComplete();
}
import { bookMarking } from '../components/bookmarking';
bookMarking();
import { calendar } from '../components/flatpickr';
calendar();
import { slider } from '../components/portfolio';
slider();
import { select } from '../components/select';
select();
import { animateSubnavInput, initRangeSlider } from '../components/subnav';
animateSubnavInput();
initRangeSlider();
