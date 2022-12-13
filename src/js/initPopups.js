import MicroModal from 'micromodal';

const $page = $('.page');

const config = {
  disableScroll:       true,
  awaitCloseAnimation: true,
  onShow:              (modal, button, event) => {
    $page.addClass('page--modal-active')
    if (!event) return;
    event.preventDefault();
    let $el = $(event.target);
    if (!$el.data('youtubeId')) $el = $el.parents('[data-youtube-id]');
    const youtubeId = $el.data('youtubeId');
    if (youtubeId) {
      const iframe = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;
      $(modal).find('.popup__container').html(iframe);
    }
  },
  onClose:             modal => {
    $page.removeClass('page--modal-active')
    $(modal).find('iframe').remove();
  },
};

MicroModal.init(config);

window.showModal = (modalId) => {
  closeModals();
  MicroModal.show(modalId, config);
};

window.closeModals = (modalId) => {
  $('.popup.is-open').each((i, el) => {
    if (el.id === modalId) return;
    MicroModal.close(el.id);
  });
}

window.showThank = () => showModal('thank-popup');
