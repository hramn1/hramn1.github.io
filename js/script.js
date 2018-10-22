jQuery(document).ready(function($){
	$('#navbar-nav').on('click', 'a', function (event) {
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 100;
		$('body,html').animate({scrollTop: top}, 1000);
		console.log(this)
 if(this.hash == id){
	 $('.nav-link').removeClass('active');
	 $(this).addClass('active');
 }
	});
});

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  speed: 600,
  autoplay: {
  delay: 5000,
  disableOnInteraction: false,
},
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
let parralax = document.querySelector('.requirement');
window.onscroll  = function () {
if (window.pageYOffset > 700 && window.pageYOffset < 1200){
let yOffset = window.pageYOffset - 700;
parralax.style.backgroundPosition = '0px '+ -yOffset + 'px';
}
}
