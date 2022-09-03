// слайдер furniture__slider

let number = document.querySelectorAll('.furniture__slider-item');
let images = document.querySelectorAll('.furniture__slider-item img');
let current = 0;
slider();
function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('off');

    }
    images[current].classList.remove('off');
    document.querySelector('.slider__nav-pagination-number').innerHTML = current + 1;
    document.querySelector('.slider__nav-pagination-all').innerHTML = number.length;
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