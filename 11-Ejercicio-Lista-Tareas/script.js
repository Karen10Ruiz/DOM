// Referencias en JavaScript

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Add Event Listener / escuchador

addButton.addEventListener('click' , createTask);

// Función manejadora

function createTask() {
    if(taskInput.value) {
        /* Crear elementos que integran la tarea */
    console.log(taskInput.value);

    /* Creamos el contenedor de una tarea */

    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    /* Creamos el parrafo de la tarea */

    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value;

    /* Creamos el contenedor de los íconos */

    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');

    /* Crear el ícono de check */

    const iconCheck = document.createElement('i');
    iconCheck.classList.add('bi', 'bi-check2-circle', 'icon-complete');

    /* Crear el ícono de Delete */

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bi', 'bi-trash', 'icon-delete');

    /* Estructura de los elementos */

    taskIcons.append(iconCheck, iconDelete);
    taskItem.append(taskText, taskIcons);
    taskList.append(taskItem);

    /* Regresamos el valor vacio al input */
    taskInput.value = '';
} else {
    alert ('¡HEY! Escribe una tarea');
        }
}
