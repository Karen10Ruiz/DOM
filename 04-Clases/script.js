//alert ("Bota nitas");

/*

    Accedemos al primer elemento de la lista.

*/

const botanas = document.getElementsByTagName('li');

/*

    Propiedad clasList

    Accedemos a la lista de clases que tiene un elemento.

    elemento.classList

    -Devuelve un DOM Token List (listado de clases en el DOM) en tipo array.

*/

console.log( botanas[0].classList );
console.log( botanas[0].classList[1] ); //Acceso a clases a través de su índice.

/*

Para agregar clases usamos el método add()

elemento.classList.add(clase)

- Nombre de la clase pasa como string entre "" o ''

*/

botanas[1].classList.add("bg-lightpink");

/*

    Verificar si existe una clase específica en un elemento con el método contains()

    elemento.classList.contains(clase)

    -Devuelve True si existe la clase 
    -Devuelve False si NO existe
    -La clase pasa como String entre "" o ''

*/

console.log(botanas[2].classList.contains("botana"));
console.log(botanas[2].classList.contains("bg-lightblue"));


/*

    Para eliminar una clase, utilizamos el método remove()

    elemento.classList.remove(clase)

    -La clase pasa entre un String entre "" o ''

*/

botanas[3].classList.remove("bg-lightpink");
botanas[3].classList.remove("botana");