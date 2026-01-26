
const input = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")

const saved = localStorage.getItem("todos");
const todos = saved? JSON.parse(saved) : [];

function saveTodos(){

}