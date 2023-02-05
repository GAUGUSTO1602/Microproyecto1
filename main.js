const ctx = document.getElementById('canvas');

var data = {
    labels: ["Programacion", "Intelecto", "Fuerza", "Determinacion", "Fe",],
    datasets: [{
        label: 'Habilidades',
        data: [60, 75, 45, 80, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FFC902',
        pointBackgroundColor: '#FFC902',
        pointBorderColor: '#FFC902',
        pointHoverBackgroundColor: '#FFC902',
        pointHoverBorderColor: '#FFC902',
        fill: true,
    },
    ]
};

var options = {
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.01
            }
        }
};


var chart1 = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
    });

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


function openNav(){
    document.getElementById("mobile-menu").style.width = '100%';
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = '0%';
}