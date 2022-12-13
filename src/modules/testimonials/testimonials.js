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


const slider = initSlider('.testimonials__slider', ($el) => ({
  wrapperClass:   'testimonials__slides',
  slideClass:     'testimonials__slide',
  slidesPerView:  1,
  spaceBetween:   0,
  loop:           true,
  centeredSlides: true,
  autoHeight:     true,
  breakpoints:    {
    [BREAKPOINT_LG]: {
      slidesPerView: 3,
    },
  },
  navigation:     {
    nextEl: '.testimonials__nav--next',
    prevEl: '.testimonials__nav--prev',
  },
}));
