//alert ("ENLAZADO wiwiwiwi");
/*

    DOM

    Organiza los elementos del documento en "nodos" en un árbol jerárquico.
    
    Nodo ->Todo elemento individual de nuestro documento.

    Tipos de Nodo

    1. Nodo de documento
    2. Nodo de elemento
    3. Nodo de atributo
    4. Nodo de texto
    5. Nodo de comentarios

*/

/*

    Nodo de documentos

    Este nodo representa al documento completo de HTML.

    Para acceder usamos:

    -> document

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/*

    Nodo de elemento

    Pra seleccionar nodos de elementos, usamos

    getElementsByTagName("etiqueta")

    Se escribe después del nodo "document"

*/

let title = document.getElementsByTagName ("p");

console.log(title)

/*

    Nodos de atributo

    Son los nodos que accedemos a través de su clase o de su Id

    getElementById("nombreId")
    getElementByClssName("nombreClase")

    querySelector("nombreSelector") -> Seleccione el primer elemento que encuentre en el selector.

    querySeeLectorAll("nombreSelector") -> Seleccionar todos los elementos con el mismo selector.
*/

/*

    let titulos = document.getElementById("title")

    console.log(title.innerText);
    console.log(title);
    console.log(title.id);

    let texts = document.getElementsByClassName("paragraph");

    console.log(texts);
    console.log(texts[0].textContent);
    console.log(texts[1].textContent);

*/

//let titulo = document.querySeeSelector("h1"); // Tag
//let titulo = document.querySeeSelector("#title"); //Id
let titulo = document.querySelector(".title"); //class

console.log(titulo)

//let parrafos = document.querySeeLectorAll("p"); //Tag
//let parrafos = document.querySelectorAll('#paragraph') //Id
let parrafos = document.querySelectorAll(".paragraph"); // Class

console.log(parrafos)

/*

    Nodo de texto

    Son los elementos de textos contenidos en las etiquetas de HTML.

    .innerText
    .textContent

*/

let subtitle = document.querySelector(".subtitle");
console,log(subtitle.innertext);
console.log(subtitle.textContent);

/*

    Nodos de comentarios 

    Tienen un valor de 8 dentro del DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario)