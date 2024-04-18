// init gallery
Fancybox.bind('[data-fancybox]', {});

// testimonials slider
var swiper = new Swiper('.testimonials__slider', {
  navigation: {
    nextEl: '.testimonials__slider-next',
    prevEl: '.testimonial__slide-prev',
  },
  effect: 'cards',
  grabCursor: true,
});
