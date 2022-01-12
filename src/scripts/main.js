/* eslint-disable no-undef */
$(document).ready(() => {
  const num = $('.owl-carousel').data('itemsnumber') || 1;
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: num,
    autoplay: true,
    dots: true,
  });
});
