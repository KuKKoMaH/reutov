import initSlider from "../../js/initSlider";

const slider = initSlider('.header__slider', ($el) => ({
  wrapperClass:   'header__slides',
  slideClass:     'header__slide',
  slidesPerView:  1,
  spaceBetween:   0,
  autoHeight:     true,
  hashNavigation: true,
  pagination:     {
    el:        '.header__pagination',
    type:      'bullets',
    clickable: true,
  },
  navigation:     {
    nextEl: '.header__nav--next',
    prevEl: '.header__nav--prev',
  },
}));
