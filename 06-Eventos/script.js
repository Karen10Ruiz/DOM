//alert("simon")

/*

    EVENTO

    Un evento es una acción o suceso que ocurre en el navegador o en un elemento del DOM. Puede ser inicado por el usuario o por el sistema o el usuario y pueden ser manejados *mediante* JavaScript.

    +Manejar eventos: Escribir código que reaccione de cierta manera, cuando algo específico suceda. Necesitamos conocer algunos conceptos claves.

    1. TARGET: (Blanco)
    
    El elemento target es el elemento del DOM en el que ocurrió el evento. Este elemento se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.target.

    2. Event Listener (Escuchador)

    El event listener es el oído que espera o que está atento a que ocurra un evento en un elemento específico. Usamos el método addEventListener para escuchar eventos.

    3. TRIGGER (Disparador)

    Es simplemente el desencadenante que provoca que un evento ocurra. Es la cción que realiza el usuario o el sistema para activar el evento.

    +Hacer clic
    +Mover el ratón
    +Escribir un input

    4. Event Handler (Manejador)

    El event handlers es la función que se ejecuta cada vez ocurre el evento. Con código JS le decimos que ahce el event handler.

    +Mostrar mensaje
    +Cambiar color
    +Lanzar una alerta
    + ...

    SINTAXIX

    target.eventListener( trigger , eventHandler)
    
    - Target: Elemento donde ocurre el evento.
    - Listener: Escucha y detecta el evento.
    - Trigger: La acción que ocurre en el evento.
    - Handler: La función que se ejecuta al ocurrir el evento.

*/

/*

    Seleccionar el elemento

*/

const button =  document.getElementById("button");

/*

    Manejar el evento

*/

button.addEventListener("click" , mostrarMensaje);

/*

    Definición de función

*/

function mostrarMensaje() {
console.log("Lo picaste!")
}