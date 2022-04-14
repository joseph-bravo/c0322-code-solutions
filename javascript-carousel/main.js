var $carousel = document.querySelector('.carousel');
var $carouselImage = document.querySelector('.carousel img');
var $progressButtons = document.querySelectorAll('.progress > button');
var $progressIcons = document.querySelectorAll('.progress i');

var carousel = {
  currentImage: 0,
  images: [
    'images/001.png',
    'images/004.png',
    'images/007.png',
    'images/025.png',
    'images/039.png'
  ],
  updateCarousel: function () {
    $carouselImage.setAttribute('src', this.images[this.currentImage]);
    for (var bIndex = 0; bIndex < $progressButtons.length; bIndex++) {
      if (JSON.parse($progressButtons[bIndex].dataset.imgId) !== this.currentImage) {
        $progressIcons[bIndex].classList.replace('fas', 'far');
      } else {
        $progressIcons[bIndex].classList.replace('far', 'fas');
      }
    }
  },
  goToID: function (ID) {
    if (ID === this.currentImage) {
      return;
    }
    this.currentImage = ID;
    this.updateCarousel();
  },
  step: function (number) {
    this.currentImage += number;
    if (this.currentImage > this.images.length - 1) {
      this.currentImage = 0;
    } else if (this.currentImage < 0) {
      this.currentImage = this.images.length - 1;
    }
    this.updateCarousel();
  }
};

var carouselTimer = setInterval(function () { carousel.step(1); }, 3000);

function carouselTimerReset() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(function () { carousel.step(1); }, 3000);
}

$carousel.addEventListener('click', function (event) {
  if (event.target.matches('.nav, .nav *')) {
    if (event.target.matches('.right, .right *')) {
      carousel.step(1);
      carouselTimerReset();
    } else {
      carousel.step(-1);
      carouselTimerReset();
    }
  } else if (event.target.matches('.progress *')) {
    var $button = event.target.closest('[data-img-id]');
    var imageID = $button.dataset.imgId;
    carousel.goToID(JSON.parse(imageID));
    carouselTimerReset();
  }
});
