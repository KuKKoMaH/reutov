import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
import initSlider from "../../js/initSlider";
import { BREAKPOINT_LG } from "../../js/breakpoints";

const interpolate = (x, x1, x2, y1, y2) => y1 + ((x - x1) / (x2 - x1) * (y2 - y1));

let isSm = false;
Breakpoints.on('sm', 'enter', () => {
  isSm = true;
});
Breakpoints.on('lg', 'enter', () => {
  isSm = false;
});


const slider = initSlider('.team__slider', ($el) => ({
  wrapperClass:   'team__slides',
  slideClass:     'team__slide',
  slidesPerView:  1,
  spaceBetween:   0,
  loop:           true,
  centeredSlides: true,
  autoHeight:     true,
  breakpoints:    {
    [BREAKPOINT_LG]: {
      slidesPerView: 2,
    },
  },
  navigation:     {
    nextEl: '.team__nav--next',
    prevEl: '.team__nav--prev',
  },
}));
