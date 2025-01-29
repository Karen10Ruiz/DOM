// Referencias en JavaScript

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

//Add Event Listener / escuchador

addButton.addEventListener('click' , createTask);

// Función manejadora

function createTask() {
    if(taskInput.value) {
        /* Crear elementos que integran la tarea */
    console.log(taskInput.value);
    /* Regresamos el valor vacio al input */
    taskInput.value = '';
} else {
    alert ('¡HEY! Escribe una tarea');
        }
}