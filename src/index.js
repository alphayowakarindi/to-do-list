import './style.css';
import { Task } from '../modules/todos.js';
import { Store } from '../modules/todos.js';
import { UI } from '../modules/todos.js';

//Selectors
const addTaskForm = document.querySelector("#add-task-form");
const addedTask = document.querySelector("#input-with-task");
const editTask = document.querySelector(".edit-task");
const todoListUl = document.querySelector('.todo-list')

// Event listners
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = document.querySelector("#description").value;
  if (!description) return;
  const task = new Task(description);
  Store.addTask(task);
  document.querySelector("#description").value = "";
  UI.addTaskToList(task)
});

// Event listners
document.addEventListener("DOMContentLoaded", UI.displayTasksToUI);

