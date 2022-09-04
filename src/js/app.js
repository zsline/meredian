
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


const accordeons = document.querySelectorAll('.accordeon');
accordeons.forEach(el => {
  el.addEventListener('click', function () {
    el.classList.toggle('active');
  });
});


//slider ship

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

$('.product-item__slider-thumb').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '.product-item__slider-prev',
  nextArrow: '.product-item__slider-next',
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






const rangeSlider = document.getElementById('renge-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 90000],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [90000]
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}