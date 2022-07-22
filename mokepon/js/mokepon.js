let ataqueJugador 
let ataqueEnemigo

function iniciarJuego(){
  let botonMascotaJugador = document.getElementById("boton-mascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador()
{
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge";
  }else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML = "Capipepo";
  }else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = "Ratigueya";
  }else{
    alert("Selecciona una Mascota");
  }
  seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
  let mascotaAleatoria = aleatorio(1,3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

  if(mascotaAleatoria == 1){
    spanMascotaEnemigo.innerHTML = "Hipodoge"
  } else if(mascotaAleatoria == 2){
    spanMascotaEnemigo.innerHTML = "Capipepo"
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya"
  }
}

function ataqueFuego(){
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua(){
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra(){
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}


function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1,3);

  if(ataqueAleatorio == 1){
    ataqueEnemigo = "Fuego";
  } else if(ataqueAleatorio == 2){
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }

  combate();
}

function combate(){
  if(ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE")
  } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    crearMensaje("GANASTE")
  } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    crearMensaje("GANASTE")
  } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
    crearMensaje("GANASTE")
  } else {
    crearMensaje("PERDISTE")
}

}
function crearMensaje(){
let seccionMensaje = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Tu mascota atacó con" + ataqueJugador + ", la mascota del enemigo atacó con" + ataqueEnemigo + "- PENDIENTE";

  seccionMensaje.appendChild(parrafo);
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)