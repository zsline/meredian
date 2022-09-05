
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

const dots = document.querySelectorAll('.benefits-slider__nav-dot');
const items = document.querySelectorAll('.benefits-slider__item');
let index = 0;
const activeSlide = n => {
  items.forEach((el) => {
    el.classList.remove('active');
    items[n].classList.add('active');
  });
}
const activeDots = n => {
  dots.forEach((el) => {
    el.classList.remove('active');
    dots[n].classList.add('active');
  });
}
dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
    activeDots(index)
  });
});


// class HvrSlider {
//   constructor(selector) {
//     const elements = document.querySelectorAll(selector);
//     elements.forEach((el) => {
//       if (el.querySelectorAll('img').length > 1) {
//         const hvr = document.createElement('div');
//         hvr.classList.add('hvr');

//         const hvrImages = document.createElement('div');
//         hvrImages.classList.add('hvr__images');
//         hvr.appendChild(hvrImages);

//         const hvrSectors = document.createElement('div');
//         hvrSectors.classList.add('hvr__sectors');
//         hvrImages.appendChild(hvrSectors);

//         const hvrDots = document.createElement('div');
//         hvrDots.classList.add('hvr__dots');
//         hvr.appendChild(hvrDots);

//         el.parentNode.insertBefore(hvr, el);
//         hvrImages.prepend(el);

//         const hvrImagesArray = hvr.querySelectorAll('img');
//         hvrImagesArray.forEach(() => {
//           hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
//           hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
//         });
//         hvrDots.firstChild.classList.add('hvr__dot--active');
//         const setActiveEl = function (targetEl) {
//           const index = [...hvrSectors.children].indexOf(targetEl);
//           hvrImagesArray.forEach((img, idx) => {
//             if (index == idx) {
//               img.style.display = 'block';
//             } else {
//               img.style.display = 'none';
//             }
//           });
//           hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
//             if (index == idx) {
//               dot.classList.add('hvr__dot--active');
//             } else {
//               dot.classList.remove('hvr__dot--active');
//             }
//           });
//         };
//         hvrSectors.addEventListener('mouseover', function (e) {
//           if (e.target.matches('.hvr__sector')) {
//             setActiveEl(e.target);
//           }
//         });
//         hvrSectors.addEventListener('touchmove', function (e) {
//           const position = e.changedTouches[0];
//           const target = document.elementFromPoint(position.clientX, position.clientY);
//           if (target.matches('.hvr__sector')) {
//             setActiveEl(target);
//           }
//         });
//       }
//     });
//   }
// }

// new HvrSlider('.benefits-slider__wrapper');