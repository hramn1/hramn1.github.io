'use strict';
  var swiperFavorites = new Swiper('.swiper-container--favorites', {
    slidesPerView: 10,
    spaceBetween: 0,
    slidesPerGroup: 1,
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
var swiperBrands = new Swiper('.swiper-container--brands', {
  slidesPerView: 7,
  spaceBetween: 10,
  slidesPerGroup: 1,
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
let menuLink = document.querySelectorAll('.main-menu-items__item');
for (let i = 0; i < menuLink.length; i++) {
  if (menuLink[i].lastElementChild.className == 'menu-dropdown') {
    let dropdown = menuLink[i].querySelector('.menu-dropdown');
    menuLink[i].addEventListener('mouseover', function () {
      delayShow(menuLink[i], dropdown);
    });
    menuLink[i].addEventListener('mouseout', function () {
      delayHidden(menuLink[i], dropdown);
    });
  }
}
function delayHidden(elem, dropdown) {
  var timeout = null;
  if (dropdown.style.display == 'block') {
  elem.onmouseout = function() {
    // Set timeout to be a timer which will invoke callback after 1s
    timeout = setTimeout(function () {
      dropdown.style.display = 'none'
    }, 300);
  };
  elem.onmouseover = function() {
    // Clear any timers set to timeout
    clearTimeout(timeout);
  };
}
}

function delayShow (elem, dropdown) {
var timeout = null;
if (dropdown.style.display !== 'block') {
//   elem.onmouseout = function() {
//     // Set timeout to be a timer which will invoke callback after 1s
//     timeout = setTimeout(function () {
//       dropdown.style.display = 'none'
//     }, 400);
//   };
//   elem.onmouseover = function() {
//     // Clear any timers set to timeout
//     clearTimeout(timeout);
//   };
// } else {
  elem.onmouseover = function () {
    // Set timeout to be a timer which will invoke callback after 1s
    timeout = setTimeout(function () {
      dropdown.style.display = 'block';
    }, 300);
  };
  elem.onmouseout = function () {
    // Clear any timers set to timeout
    clearTimeout(timeout);
  };
}
}
