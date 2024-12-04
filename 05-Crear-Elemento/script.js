//alert("holis")

/*

    Obtenemos un elemento de referencia.

    -Éste es el nodo de HTML donde vamos a crear un nuevo elemento.

*/

const movies = document.getElementById("movies");

//console.log(movies);

/*

    Para crear un nuevo elemento usamos createElement

    document.createElement(tipoElemento)

    -Tipo de elemento pasa como string entre "" o ''
    -Se debe guardar en una variable o constante

*/

const newMovie = document.createElement("li");

//console.log(newMovie);


/*

Para agregar el elemento DOM desde la referencia usamos el método append()

elementoReferencia.append(nuevoElemento)

-El nuevo elemento NO pasa como string, es una constante

*/

movies.append(newMovie);

/*

Agregamos texto al nuevo elemento con innerText

elemento.innerText = valor

- El valor pasa como String entre "" o ''

*/

newMovie.innerText = "Hotel transilvania🦇"

/*

    Agregamos las clases al nuevo elemento con el elemento add()

    elemento.classList.add(clase)

    -La clase pasa com string
    -El método acepta más de un parámetro separandolo con comas ,

*/

newMovie.classList.add("list-item" , "bg-two");

/*

Hagamos un 5 elemento

*/

const more = document.getElementById("movies");
const one = document.createElement("li");
more.append(one);
one.innerText = "Frozen❄️";
one.classList.add("list-item" , "bg-one");
