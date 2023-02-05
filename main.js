/* grafica */

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


/* carrusel */

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


/* navegador movil */

function openNav(){
    document.getElementById("mobile-menu").style.width = '100%';
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = '0%';
}


/* formulario */


function enviarFormulario(){

    var nombre = document.getElementById("name");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");


    var countError = 0;

    if(nombre.value === null || nombre.value === '' ){
        alert('Ingrese su nombre');
        countError =+ 1; 

    };

    if(email.value === null || email.value === '' ){
        alert('Ingrese su email');
        countError =+ 1; 
    };

     if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)){
    } else {
         alert("La dirección de email es incorrecta.");
         countError =+ 1; 
    };


    if(mensaje.value === null || mensaje.value === '' ){
        alert('Ingrese un mensaje');
        countError =+ 1; 

    };

    if(countError == 0){
        alert('Mensaje enviado con exito!')
    };

    return false;
    
}