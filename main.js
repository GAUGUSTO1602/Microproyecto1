

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