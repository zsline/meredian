
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// слайдер furniture__slider

let number = document.querySelectorAll('.furniture__slider-item');
let images = document.querySelectorAll('.furniture__slider-item img');
let current = 0;
document.querySelector('.slider__nav-pagination-all').innerHTML = number.length;
slider();
function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('off');

    }
    images[current].classList.remove('off');
    document.querySelector('.slider__nav-pagination-number').innerHTML = current + 1;
};


document.querySelector('.slider__wrapper').onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};

document.querySelector('.furniture__slider-prev').onclick = function () {
    if (current -1 == -1) {
        current = images.length - 1;
    }
    else {
        current--;
    }
    slider();
};
document.querySelector('.furniture__slider-next').onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};


//slider shop

// const sliderItem = document.querySelectorAll('.shop__slider-item');
// const sliderWidth = document.querySelector('.shop__slider-item');
// const sliderLine = document.querySelector('.shop__slider-wrapper');
// let count = 0;
// let width;
// let widthItem = sliderWidth.offsetWidth;



$('.ship__slider-wrapper').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.ship__slider-prev',
    nextArrow: '.ship__slider-next',
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          dots: false
        }
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });