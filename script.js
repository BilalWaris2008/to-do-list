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
    const li = document.createElement('li');

    // checkbox to toggle completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        // Todo: Visual Feedback: strike-through when completed 
        saveTodos();
    })

    // Text of the Todo
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = '0 8px';
    if (todo.completed) {
        textSpan.style.textDecoration = 'line-through';

        // Add double-click Event Listener to edit Todo
        textSpan.addEventListener('dblclick', () => {
            const newText = prompt("Edit Todo", todo.text);
            if (newText !== null) {
                todo.text = newText.trim()
                textSpan.textContent = todo.text;
                saveTodos();
            }
        })
    }
}

// Render the whole Todo list from Todo Array
function render() {
    list.innerHTML = '';

    // Recreate Each Item
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index)
        list.appendChild(node)
    });
}