import "./style.css";
import { Task } from "../modules/todos.js";
import { Store } from "../modules/store.js";
import { UI } from "../modules/ui.js";

//Selectors
const addTaskForm = document.querySelector("#add-task-form");
const addedTask = document.querySelector("#input-with-task");
const editTask = document.querySelector(".edit-task");
const todoListUl = document.querySelector(".todo-list");

// Event listners
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = document.querySelector("#description").value;
  if (!description) return;
  const task = new Task(description);
  Store.addTask(task);
  document.querySelector("#description").value = "";
  UI.addTaskToList(task);
});

// Event listners
document.addEventListener("DOMContentLoaded", UI.displayTasksToUI);

todoListUl.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("edit-task")) {
    element.previousElementSibling.disabled = false;
    element.previousElementSibling.style.backgroundColor = "#ffffb3";
    element.parentElement.style.backgroundColor = "#ffffb3";
    element.style.display = "none";
    element.nextElementSibling.style.display = "inline-block";
  }

  if (element.classList.contains("fa-trash-can")) {
    const objIndex = Number(element.dataset.index);
    // Remove from local storage
    Store.remove(objIndex);
    // Remove from dom
    element.parentElement.remove();
  }

  if (element.classList.contains("input-with-task")) {
    const objIndex = Number(element.dataset.index);
    const updateForm = element.parentElement.parentElement;
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // update input in the dom
      element.value = element.value;
      element.disabled = true;
      element.parentElement.style.backgroundColor = ''
      element.style.backgroundColor = ''
      // hide delete icon
      element.nextElementSibling.nextElementSibling.style.display = 'none'
      // show edit icon
      element.nextElementSibling.style.display = 'inline-block'

       // update in the local storage as well
       Store.update(objIndex, element.value)
    });
  }
});
