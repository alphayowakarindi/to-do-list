/* eslint-disable import/prefer-default-export */
// Selectors
const addTaskForm = document.querySelector("#add-task-form");

export const todoTasks = [];

// Classes
class Task {
  constructor(description) {
    this.index = Store.getTasksList().length;
    this.completed = false;
    this.description = description;
  }
}

class Store {
  static getTasksList() {
    const todoTasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
    return todoTasks;
  }

  static addTask(task) {
    this.getTasksList();
    todoTasks.push(task);
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
  }
}

class UI {
  static displayTasksToUI() {
    const todoTasks = Store.getTasksList();
    const todoListUl = document.querySelector(".todo-list");

    todoTasks.forEach((todoTask) => {
      todoListUl.innerHTML += `
                <li>
                    <input type="checkbox">
                    <span>${todoTask.description}</span>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </li>    
                <hr>`;
    });
  }
}

// Event listners
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = document.querySelector("#description").value;
  if (!description) return;
  const task = new Task(description);
  Store.addTask(task);
  document.querySelector("#description").value = "";
});
document.addEventListener("DOMContentLoaded", UI.displayTasksToUI);
