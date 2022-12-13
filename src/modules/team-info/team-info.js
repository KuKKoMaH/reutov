import initSlider from "../../js/initSlider";
import { BREAKPOINT_LG } from "../../js/breakpoints";

window.openTeamInfo = (id) => {
  showModal(id);
  const slider = initSlider('#' + id + ' .team-info__slider', ($el) => ({
    wrapperClass:   'team-info__slides',
    slideClass:     'team-info__slide',
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
      nextEl: '.team-info__nav--next',
      prevEl: '.team-info__nav--prev',
    },
  }));
}