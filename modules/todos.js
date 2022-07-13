/* eslint-disable import/prefer-default-export */

// Classes
export class Task {
  constructor(description) {
    this.index = Store.getTasksList().length;
    this.completed = false;
    this.description = description;
  }
}

export class Store {
  static getTasksList() {
    const todoTasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
    return todoTasks;
  }

  static addTask(task) {
    const todoTasks = Store.getTasksList();
    todoTasks.push(task);
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
  }
}

export class UI {
  static displayTasksToUI() {
    const todoTasks = Store.getTasksList();

    todoTasks.forEach((todoTask) => {
      UI.addTaskToList(todoTask)
    });
  }

  static addTaskToList(task){
    const todoListUl = document.querySelector(".todo-list");
    todoListUl.innerHTML += `
              <li>
                  <input type="checkbox">
                  <input  disabled value="${task.description}" type="text" id="input-with-task"/>
                  <i class="fa-solid fa-ellipsis-vertical edit-task"></i>
                  <i class="fa-solid fa-trash-can"></i>
              </li>    
              <hr>`;
  }
}
