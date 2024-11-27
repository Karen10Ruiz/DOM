/*

    Seleccionamos elementos por su ID.

*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/*

Mostramos por consola

*/

console.log(titulo)
console.log(lista)

/*

    InnerText

    Devuelve un string del contenido visible dentro de un elemento.

    elemento.innerText

    -Excluye los elementos ocultos.
    -Excluye los espacios en el documento.
    -Excluye las etiquetas HTML.

*/

console.log("Resultados con InnerText >>>>>>>")
console.log(titulo.innerText)
console.log(lista.innerText)

/*

    textContent

    Devuelve un string del contenido visible dentro de un elemento.

    elemento.textContent

    -Incluye los espacios
    -Incluye los elementos ocultos
    -Excluye las etiquetas HTML

*/

console.log("Resultados con textContent >>>>>>>")
console.log(titulo.textContent)
console.log(lista.textContent)

/*

    InnerHTML

    Devuelve un string con la estructura interna del elemento seleccionado.

    elemento.innerHTML

*/

console.log("Resultados con innerHTML >>>>>>>")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)

/*

    Modificar el contenido con innerText

    Asignamos el valor al elemento seleccionado.

    elemento.innerText = "string"

*/

titulo.innerText = "🐴 ponys";
lista.innerText = "No hay ponis!";

/*

    Modificar el contenido con textContent

    Asiganamos el valor al elemento seleccionado.

    elemento.textContent = "string"

*/

titulo.textContent = "My 🐴 ponys";
lista.textContent = "Cargando...";

/*

Modificar el contenido con innerHTML

Asignamos el valor al elemento seleccionado incluyendo las etiquetas HTML

    elemento.innerHTML = "<tag> ... </tag>""

*/

titulo.innerHTML = " Amigos <span> todos los ponys <span>";
lista.innerHTML = `<li>AppleJack<li> <li class"oculto">Rarity<li>`;