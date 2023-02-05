



function enviarFormulario(){

    var nombre = document.getElementById("name");
    var email = document.getElementById("email");
    var expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    var mensaje = document.getElementById("mensaje");


    var countError = 0;

    if(nombre.value === null || nombre.value === '' ){
        alert('Ingrese su nombre');
        countError =+ 1; 

    }

    if(email.value === null || email.value === '' ){
        alert('Ingrese su email');
        countError =+ 1; 
    }


    if(mensaje.value === null || mensaje.value === '' ){
        alert('Ingrese un mensaje');
        countError =+ 1; 

    }

    if(countError == 0){
        alert('Mensaje enviado con exito!')
    }
    

    return false;
}