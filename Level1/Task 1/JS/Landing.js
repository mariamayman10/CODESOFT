const slides = document.querySelectorAll(".slides");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
}

showSlide(currentSlide);

const interval = setInterval(nextSlide, 2000);
