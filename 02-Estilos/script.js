//console.log("BEEP BEEP")

/*

    Seleccionar el elemento H1 a través de su clase

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

console.log("Valores en línea. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*

    Método de propiedad 

    Asignar el valor de la propiedad de estilo en el elemento seleccionado.

    elemento.style.nombrePropiedad = "valor"

    -Es la forma más directa y legible de asignar propiedades.
    -Sólo admite asignar propiedades con formato camelCase.



*/

//let colorUsuario = promp("Escribe un color");

titulo.style.color = "purple";
titulo.style.backgroundColor = "yellow";

console.log("Valores asignados con JS. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*

    Método setProperty()

    Asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)

    -Más flexible y poderoso.
    -Las propiedades se escriben en formato kebab-case.
    -Parámetro "important" es opcional.

*/

titulo.style.setProperty("color" , "darkblue");
titulo.style.setProperty("background-Color" , "red" , "important");

console.log("Valores asignados con setProperty. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*

    Eliminar valores de propiedades

    Usamos el método de propiedad y le definimos una cadena de texto vacía.

    elemento.style.nombrePropiedad = " "

    Esto elimina los valores previamente definidos en JS y en los estilos en línea.

*/

//titulo.style.color = "";
//titulo.style.backgroundColor = "";

/*

    Método removeProperty()

    Ésto elimina la propiedad de estilo 

    elemento.style.removeProperty(nombrePropiedad)

    -Las propiedades se pasan en formato kebab-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");