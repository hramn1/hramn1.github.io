'use strict';
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 10,
    spaceBetween: 0,
    slidesPerGroup: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
