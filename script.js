// Select DOM Elements
const input = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")

// Try to Load Saved Todos from Local Storage (if any)
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
    // Save current todos array to Local Storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Create a DOM Node for a Todo Object & Append it to the list
function createTodoNode(todo, index) {

}

// Render the whole Todo list from Todo Array
function render() {
    list.innerHTML = '' ;
}