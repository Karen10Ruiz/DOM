//alert ("ICBAIB")

/*

    Métodos de navegación

    Nos permite movernos entre los elementos relacionados en el DOM
*/

// Referencias 

const padre = document.getElementById('parent')
const hijo = document.getElementById('child')
const hermano = document.getElementById('sibling')

//parentNode -> Devuelven el nodo del padre del elemento.

console.log(hijo.parentNode);

//childNotes -> Devuelve una colección (NodeList) de todos los nodos hijos, incluyendo elementos de HTML, incluyendo texto y comentarios.

console.log(padre.childNodes);

//children -> Devuelve una conección de HTML (HTML Collection) de los hijos que son elementos. Ignora nodos de texto o comentarios.

console.log(padre.children);

//firstChild -> Devuelve el primer nodo hijo, que sea un nodo de texto, comentario o elemento. 

console.log(padre.firstChild);

//firstElementChild -> Devuelve el primer nodo hijo, que sea un elemento de HTML. 

console.log(padre.firstElementChild);

//lastChild -> Devuelve el último nodo hijo, puede ser nodo de texto, comentario o elemento. 

console.log(padre.lastChild);

//lastElementChild -> Devuelve el último nodo hijo que sea un elemento, va a omitir, ignorar los espacios.

console.log(padre.lastElementChild);

//nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento. 

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

//nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento.

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

//previousSibling -> Devuelve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

//previousElementSibling -> Devuelve el anterior nodo hermano, que sea un elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);