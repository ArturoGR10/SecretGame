let numeroAleatorio = 0;
let contador = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroAleatorio);

function elementAndText(elemento, texto) {
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroIntroducido = parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroAleatorio === numeroIntroducido) {
        elementAndText('p',`¡Has adivinado el numero! Acertaste en ${contador} ${(contador === 1) ? 'intento': 'intentos'}`);
       document.getElementById('reiniciar').removeAttribute('disabled');

    } else if(numeroAleatorio > numeroIntroducido) {
        elementAndText('p', 'El numero buscado es mayor');
        } else { 
        elementAndText('p', 'El numero buscado es menor');
        }
        contador++
        limpiarCaja();
    return;
}

function limpiarCaja () {
    document.querySelector('#numeroUsuario').value = '';
}

function generadorNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        elementAndText('p', 'Ya se han sorteado todos los numeros posibles');
    } else {
    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generadorNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionalesInciales (){
    elementAndText('h1', 'Adivina el numero');
    elementAndText('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroAleatorio = generadorNumeroSecreto();
    contador = 1;
}

function reiniciarJuego () {
    condicionalesInciales();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

elementAndText('h1', 'Adivina el numero');
elementAndText('p', 'indica un numero del 1 al 10');

condicionalesInciales();