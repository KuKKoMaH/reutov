import initSlider from "../../js/initSlider";
import { BREAKPOINT_LG } from "../../js/breakpoints";


const slider = initSlider('.examples__slider', ($el) => ({
  wrapperClass:   'examples__slides',
  slideClass:     'examples__slide',
  slidesPerView:  1,
  spaceBetween:   0,
  loop:           true,
  autoHeight:     true,
  breakpoints:    {
    [BREAKPOINT_LG]: {
      slidesPerView: 2,
    },
  },
  navigation:     {
    nextEl: '.examples__nav--next',
    prevEl: '.examples__nav--prev',
  },
}));
