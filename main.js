const slider = document.querySelector("#slider");
let sliderSelector = document.querySelectorAll(".sliderSec");
let sliderSelectorLast = sliderSelector[sliderSelector.length - 1];

const btnLeft = document.querySelector('#btnL');
const btnRight = document.querySelector('#btnR');

slider.insertAdjacentElement('afterbegin', sliderSelectorLast);

function moverDerecha() {
    let sliderSelectorFirst = document.querySelectorAll('.sliderSec')[0];
    slider.style.marginLeft = '-210%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSelectorFirst);
        slider.style.marginLeft = '-110%';
    }, 500)
};

btnRight.addEventListener('click', function(){
    moverDerecha()
});

function moverIzquierda() {
    let sliderSelectorFirst = document.querySelectorAll('.sliderSec')[0];
    let sliderSelectorLast = sliderSelector[sliderSelector.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSelectorLast);
        slider.style.marginLeft = '-110%';
    }, 500)
};

btnLeft.addEventListener('click', function(){
    moverIzquierda()
});
