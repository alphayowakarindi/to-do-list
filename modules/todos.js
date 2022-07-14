/* eslint-disable import/prefer-default-export */

// Classes
export class Task {
  constructor(description) {
    this.index = Store.getTasksList().length + 1;
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

  static remove(objIndex) {
    const todoTasks = JSON.parse(localStorage.getItem("todoTasks"));
    const filtereTododTasks = todoTasks.filter(
      (todoTask) => todoTask.index !== objIndex
    );
    // Update indexes of the todo tasks objects
    filtereTododTasks.forEach(
      (filtereTododTask, index) => (filtereTododTask.index = index +1)
    );
    localStorage.setItem("todoTasks", JSON.stringify(filtereTododTasks));
  }
}

export class UI {
  static displayTasksToUI() {
    const todoTasks = Store.getTasksList();

    todoTasks.forEach((todoTask) => {
      UI.addTaskToList(todoTask);
    });
  }

  static addTaskToList(task) {
    const todoListUl = document.querySelector(".todo-list");
    todoListUl.innerHTML += `
    <form id="update-form">
              <li>
                  <input type="checkbox">
                  <input class="input-with-task"  disabled value="${task.description}" type="text" id="input-with-task" data-index="${task.index}"/>
                  <i class="fa-solid fa-ellipsis-vertical edit-task" data-index="${task.index}"></i>
                  <i class="fa-solid fa-trash-can" data-index="${task.index}"></i>
              </li>  
              <button id="submit" type="submit" hidden></button> 
    </form>            
    <hr>`;
  }
}
