let numeroJugador = 0;
let numeroMaquina = 0
let oportunidades = 5;
let intentos = 0;
let entradaNumero = document.getElementById('entrada');

numeroOculto();
console.log(numeroMaquina);

function numeroOculto() {
    numeroMaquina = Math.floor(Math.random()*(10)+1);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentar() {
    numeroJugador = parseInt(entradaNumero.value);
    console.log(numeroJugador);
    entradaNumero.value = '';
    entradaNumero.focus();
    
    if(numeroJugador == 0 || numeroJugador > 10){
        asignarTextoElemento('h2', 'del 1 al 10 plis')
    }else if (isNaN(numeroJugador)){
        asignarTextoElemento('h2', 'Número plis')
    }
    else if (numeroJugador === numeroMaquina){
        intentos++;
        asignarTextoElemento('h2', `¡Adivinaste! lo hiciste en ${intentos} ${(intentos === 1) ? 'intento.' : 'intentos'}`)
        entradaNumero.setAttribute ('disabled', 'true');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else if(oportunidades > 1){
        intentos++;
        oportunidades--;
        asignarTextoElemento('h2', `No adivinaste, inténtalo de nuevo. <br> Te ${(oportunidades === 1) ?  'queda' : 'quedan'} ${oportunidades} ${(oportunidades == 1) ? 'oportunidad' : 'oportunidades'}`)       
    }else{
        asignarTextoElemento('h1', 'Lo siento, no adivinaste')
        asignarTextoElemento('h2', `Se terminaron tus oportunidades. El número era ${numeroMaquina}. Mejor suerte para la próxima`);
        entradaNumero.setAttribute('disabled', 'true');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
}

function reiniciar() {   
    asignarTextoElemento('h1', 'Adivina el número') 
    asignarTextoElemento('h2', 'Introduce un número del 1 al 10. Tienes 5 oportunidades para adivinar')
    document.querySelector('#intentar').removeAttribute('disabled');
    document.querySelector('#entrada').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    entradaNumero.focus();
    intentos = 0;
    oportunidades = 5;
    numeroOculto();
    console.log(numeroMaquina);
}