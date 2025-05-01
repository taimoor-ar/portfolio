// Toggle mobile navigation
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Client reviews slider - right to left
let slideIndex = 0;
const reviewSlides = document.querySelectorAll('.slide');

function showReviewSlide() {
  reviewSlides.forEach((slide) => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % reviewSlides.length;
  reviewSlides[slideIndex].classList.add('active');
}

setInterval(showReviewSlide, 4000); // Slide every 2 seconds

