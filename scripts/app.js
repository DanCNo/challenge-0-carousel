

var slideIndex = 0;

function moveSlides(idx) {
  showSlides(slideIndex += idx);
}

function currentSlide(idx) {
  showSlides(idx);
}

function showSlides(idx){

  var slides = document.getElementsByClassName("image");

  var dots = document.getElementsByClassName("dot");

  slideIndex = Math.abs(idx) % 4;

  slides[0].style = `background-image: url(./images/hero-image-${slideIndex}.jpg)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex].className += " active";

  
}