window.onload = function() {
  var el = document.querySelector(".main-header");
  window.addEventListener("scroll", function(event){
    if (window.pageYOffset > 200)
      el.classList.add("head-fix");
    else
      el.classList.remove("head-fix");
  });
}
  
