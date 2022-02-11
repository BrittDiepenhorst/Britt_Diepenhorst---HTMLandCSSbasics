// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// New Todo
const Todo = { description: todoInput.value, done: false };

// EventListeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodo);

// Functions
function addToDo() {

    // // Prevent FORM from submitting
    // event.preventDefault(); 

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Checked BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check-square"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    // Trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to LIST
    todoList.appendChild(todoDiv);

    // CLEAR Todo Input value
    todoInput.value = "";
    postTodo();
};

function deleteCheck(e) {
    const item = e.target;

    // DELETE Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    // CHECK Todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};