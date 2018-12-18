 'use strict';
 var model ={
   data:
    [{
     text: 'Сколково парк» — это жилой комплекс премиум-класса в престижном пригороде мирового уровня',
     img: 'url(img/bg-1.jpg)'
   },
   {
     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
     img: 'url(img/bg-2.jpg)'
   },
   {
     text: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
     img: 'url(img/bg-3.jpg)'
   },
   {
     text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
     img: 'url(img/bg-4.jpg)'
   },
   {
     text: 'It has survived not only five centuries, but also the leap into electronic typesetting',
     img: 'url(img/bg-5.jpg)'
   },
   {
     text: 'remaining essentially unchanged. It was popularised in the 1960s with',
     img: 'url(img/bg-6.jpg)'
   }],
   current: function (j,evt) {
     var text;
     var img;
    for (var i = 0; i <= j; i++){
      text = this.data[i].text;
      img = this.data[i].img;
    }
    view.change(text,img,evt)
   }
 }
var view = {
  change: function (text,img, evt) {
    var slideTitle = document.querySelector('.slide-info__title');
    var wrapper = document.querySelector('.wrapper');
    var imgMin = document.querySelectorAll('.slider__image');
    for (var i = 0; i < imgMin.length; i++){
      if(imgMin[i].classList.contains('slider__image--active')){
        imgMin[i].classList.remove('slider__image--active')
      }
    }
    evt.target.classList.add('slider__image--active')
    slideTitle.textContent = text;
    wrapper.style.backgroundImage = img;
  },
  dropdown: function () {
    var dropDown = document.querySelector('.dropdown-inner');
    dropDown.style.display = 'block'
  },
  closedropdown: function () {
    var dropDown = document.querySelector('.dropdown-inner');
    dropDown.style.display = 'none'
  },
  changeBg: function (j) {
    var wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = model.data[j].img;
  }
}
var controller = {
  img: function () {
    var imgMin = document.querySelectorAll('.slider__image');
    var dropDownOpen = document.querySelector('.dropdown-text__link');
    var btnClose = document.querySelector('.close-cross')
    dropDownOpen.onclick = function (evt) {
      view.dropdown();
    }
    btnClose.onclick = function (evt) {
      view.closedropdown();
    }
    for (var i = 0; i < imgMin.length; i++){
      var imgClick = imgMin[i];
      imgClick.onclick = function (evt) {
        clearInterval(timerId);
        var j = evt.target.dataset.index;
        model.current(j,evt)
      }
    }
  }
}
var j = 0
var timerId = setInterval(function () {
  j++
  if (j > 5){
    j=0;
  }
  view.changeBg(j)
}, 3000)

controller.img()
