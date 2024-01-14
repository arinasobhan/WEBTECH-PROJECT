let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const visibleSlides = 4; 

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    if (i < slideIndex || i >= slideIndex + visibleSlides) {
      slides[i].style.display = 'none';
    } else {
      slides[i].style.display = 'block';
    }
  }
}

function nextSlide() {
  slideIndex += 1;
  if (slideIndex > totalSlides - visibleSlides) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = totalSlides - visibleSlides;
  }
  showSlides();
}


showSlides();


// Function to scroll to the top smoothly when the button is clicked
function scrollToTop() {
  // Using document.body to support older browsers
  document.body.scrollIntoView({
      behavior: 'smooth'
  });

  // For modern browsers
  document.documentElement.scrollIntoView({
      behavior: 'smooth'
  });
}
