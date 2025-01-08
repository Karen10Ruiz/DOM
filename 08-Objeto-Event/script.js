//alert("coli")

/*

    Objeto Event

    Representa un suceso que ocurre en el navegador , como un click, ulsar una tecla o el movimiento del mouse y proporciona información sbre las propiedades y métodos para manejarlo.

    Para acceder al objeto event (e) se pasa automáticamente como un argumento a la función manejadora. 

    Sintaxis

    function funcionManejadora() {
        //código a ejecutar
        console.log(event) //Muestra la lista de propiedades y métodos.
    }

    Propiedades del objeto event:

    - type: Devuelve el tipo de evento
    - traget: Devuelve el elemento donde ocurre el evento}
    - timeStamp: Devuelve la marca de tiempo en milisegundos desde l carga de la página.

    -code: Devuelve el código de la tecla presionada
    -key: Devuelve el valor de la tecla presionada
    
    -clientX: Devuelve la posición horizontal del puntero en relación a la ventana del navegador.
    -clientY: Devuelve la posición vertical del puntero del mouse en relación con la ventana del navegador.

*/

const button = document.getElementsByClassName("button");

//console.log(button[0]);

button[0].addEventListener('click', mostrarObjetoEvento);

/* Acedemos al objeto de evento */

function mostrarObjetoEvento(event) {
/* Código que se ejecuta */ 
console.log(event);
console.log(event.type);
console.log(event.target);
console.log(event.timeStamp);
console.log(event.target.innerText);
}

document.addEventListener('keydown' , function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
} )

document.addEventListener('mousemove' , (e) => {
    //console.log(e);
    console.log(e.type);
    console.log("Cord x:" + e.clientX + "Cord y" + e.clientY);
});