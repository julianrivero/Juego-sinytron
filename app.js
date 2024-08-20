let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);  
    
     if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento("p", `acertaste el numero ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento("p", "el numero es menor")
        }  else {
            asignarTextoElemento("p", "el numero es mayor")
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function condicionesIniciales () {
    asignarTextoElemento ("title", "Sinytron")
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //inidicar mensaje  de intervalo numeros
    //generrar numero aleatorio
    // iniializar numero intentos
    condicionesIniciales();
    //dshabilitar el boton nuevoJe
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}


function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros");

} else {

if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();

} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

}

}

}
condicionesIniciales();