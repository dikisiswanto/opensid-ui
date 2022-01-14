import 'tw-elements';
/* eslint-disable func-names */
/* eslint-disable no-undef */
$(document).ready(() => {
  $('.owl-carousel').each(function () {
    const slideItems = $(this).data('itemsnumber') || 1;
    $(this).owlCarousel({
      loop: true,
      items: slideItems,
      autoplay: true,
      dots: true,
      margin: (slideItems > 1 ? 12 : 0),
      animateOut: 'fadeOutLeft',
      animateIn: 'fadeInRight',
      autoplayHoverPause: true,
    });
  });
  if ($('.slider-nav').length) {
    const owl = $('.slider .owl-carousel');
    $('.slider-nav-prev').click(() => {
      owl.trigger('prev.owl.carousel');
    });

    $('.slider-nav-next').click(() => {
      owl.trigger('next.owl.carousel');
    });
  }
});
