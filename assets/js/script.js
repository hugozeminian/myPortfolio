/*==============================================
→ ### MOBILE MENU ### */
const viewMobileMenu = () => {

  var mobileLinks = document.getElementById("mobile-links");

  mobileLinks.style.display === "block" ? mobileLinks.style.display = "none" : mobileLinks.style.display = "block";

}


/*==============================================
→ ### CAROUSEL ### */
/*const carouselTrack = document.querySelector('.carousel__track');
const carouselSlides = Array.from(document.querySelectorAll('.carousel__slide'));
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
let currentPosition = 0;

function moveToSlide(position, numberSlides) {
  carouselTrack.style.transform = `translateX(-${position * 100 / numberSlides}%)`;
}

function updateSlidePosition(position) {
  carouselSlides.forEach((slide, index) => {
    if (index === position) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function moveToNextSlide() {
  currentPosition++;
  if (currentPosition > carouselSlides.length - 1) {
    currentPosition = 0;
  }
  moveToSlide(currentPosition, carouselSlides.length);
  updateSlidePosition(currentPosition);
}

function moveToPrevSlide() {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = carouselSlides.length - 1;
  }
  moveToSlide(currentPosition, carouselSlides.length);
  updateSlidePosition(currentPosition);
}

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

updateSlidePosition(currentPosition);
*/
function setupCarousel(carouselElement) {
  const carouselTrack = carouselElement.querySelector('.carousel__track');
  const carouselSlides = Array.from(carouselElement.querySelectorAll('.carousel__slide'));
  const prevButton = carouselElement.querySelector('.carousel__button--prev');
  const nextButton = carouselElement.querySelector('.carousel__button--next');
  let currentPosition = 0;

  function moveToSlide(position, numberSlides) {
    carouselTrack.style.transform = `translateX(-${position * 100 / numberSlides}%)`;
  }

  function updateSlidePosition(position) {
    carouselSlides.forEach((slide, index) => {
      if (index === position) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function moveToNextSlide() {
    currentPosition++;
    if (currentPosition > carouselSlides.length - 1) {
      currentPosition = 0;
    }
    moveToSlide(currentPosition, carouselSlides.length);
    updateSlidePosition(currentPosition);
  }

  function moveToPrevSlide() {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = carouselSlides.length - 1;
    }
    moveToSlide(currentPosition, carouselSlides.length);
    updateSlidePosition(currentPosition);
  }

  nextButton.addEventListener('click', moveToNextSlide);
  prevButton.addEventListener('click', moveToPrevSlide);

  updateSlidePosition(currentPosition);
}

const carousel1 = document.querySelector('#carousel-1');
setupCarousel(carousel1);

const carousel2 = document.querySelector('#carousel-2');
setupCarousel(carousel2);

const carousel3 = document.querySelector('#carousel-3');
setupCarousel(carousel3);