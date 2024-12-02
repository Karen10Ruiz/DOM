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

/*

    getAttribute()

    Devuelve el valor del atributo del elemento que le indiquemos.

    elemento.getAttribute(atributo)

*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"));

/*

    removeAttribute()

    Elimina el cvalor del atributo de un elemento.

    elemento.removeAttribute(atributo)

*/

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"));

/*

    setAttribute

    Asigna un atributo y un valor a un elemento.

    elemento.setAttribute(atributo, valor)

    -Sobreescribir un nuevo tributo declarado.
    -Crea un nuevo atributo y su valor.

*/

enlace[0].setAttribute("href", "https://www.roblox.com");

console.log(enlace[0].getAttribute("href"));

/* Antes */

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

/*Despues */

console.log(enlace[0].getAttribute("target"));

/* Commit -m "Terminamos textos y atributos del DOM" */