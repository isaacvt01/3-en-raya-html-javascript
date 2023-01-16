// Tablero de juego
// 0 - En blanco
// 1 - Círculo
// 2 - Cruz
let tablero = [0,0,0,0,0,0,0,0,0];

//Jugador
// 1 - Círculo
// 2- Cruz
let jugador = 1;
function puedoColocar(pos) {
    return tablero[pos] ==0;
}

function colocar(pos) {
    tablero[pos]=jugador;
    document.getElementById("d"+pos).className='jugador'+jugador;
}

function reiniciarJuego() {
    jugador = 1;
    for(pos=0;pos<9;pos++){
        tablero[pos]=0;
        document.getElementById("d"+pos).className='';
        document.getElementById('finalizado').innerText=''

    }
}

function valida(a,b,c){
    return (a==b) && (b==c) &&(a!=0);
}
function juegoTerminado() {

    let contadorBlancos = 0;
    for(pos=0;pos<9;pos++){
        if (tablero[pos]==0){
            contadorBlancos++;
        }
    }
    let empate = (contadorBlancos==0);

    let ganador = valida(tablero[0], tablero[1], tablero[2])
                || valida(tablero[3], tablero[4], tablero[5])
                || valida(tablero[6], tablero[7], tablero[8])
                || valida(tablero[0], tablero[3], tablero[6])
                || valida(tablero[1], tablero[4], tablero[7])
                || valida(tablero[2], tablero[5], tablero[8])
                || valida(tablero[0], tablero[4], tablero[8])
                || valida(tablero[6], tablero[4], tablero[2])

    if (ganador){
        document.getElementById('finalizado').innerText='Hay un ganador';
        return true;
    }
    else if(empate){
        document.getElementById('finalizado').innerHTML='El juego ha acabado. Es empate';
        return true
    }
    else{
        return false;
    }

}

function jugar(pos) {
    if(!juegoTerminado()) {
        if (puedoColocar(pos)) {
            colocar(pos);
            cambiarJugador();
            juegoTerminado();
        } else {
            alert("No puedes colocar la ficha aquí")
        }
    }
}

function cambiarJugador() {
    if(jugador==1){
        jugador=2;
    }
    else{
        jugador = 1;
    }
}

