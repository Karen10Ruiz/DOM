//console.log("BEEP BEEP")

/*

    Seleccionar el elemento H1 a través de su clalse

*/

const titulo = document.querySelector(".titulo")

/*

    Mostramos el nodo seleccionado

    -Nodo expandido  ---> <h1>...<h1>
    -Nodo abstracto  ---> h1.title

    Algunos navegadores optimizan la representación de nodos en la consola. (Chrome😈)

*/

console.log(titulo)

/*

    Objeto Style

    Accedemos a él usando la notación de punto (.)

    elemento.style

    Resultado de esto es un CSS Style Declaration. Es una lista que representa todas las propiedades de estilo de un elemento. 

    Únicamente muestra el valor de los estilos en línea declarados directamente en el elemento HTML 

*/

console.log(titulo.style)

/*

    Propiedades de estilo

    Accedemos a las propiedades usando la notación de punto (.)

    elemento.style.nombrePropiedad

    A diferencia de CSS, las propiedades de estilo en JS las escribimos usando el formato camelCase.

    CSS -> background-color (kebab-case)
    JS -> backgroundColor (camelCase)

*/

console.log("Valores en línea. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)
