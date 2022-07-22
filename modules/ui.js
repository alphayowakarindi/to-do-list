/* eslint-disable import/prefer-default-export */
// import { Store } from './store.js';
const Store = require('./store.js');

class UI {
  static displayTasksToUI() {
    const todoTasks = Store.getTasksList();

    todoTasks.forEach((todoTask) => {
      UI.addTaskToList(todoTask);
    });
  }

  static addTaskToList(task) {
    const todoListUl = document.querySelector('.todo-list');
    todoListUl.innerHTML += `
      <form id="update-form">
                <li>
                    <input 
                     type="checkbox" 
                     class="completed-status-checkbox" 
                     data-index="${task.index}"
                     ${task.completed ? 'checked' : ''}>
                    <input 
                    class="input-with-task 
                    ${task.completed ? 'line-through' : ''}"  
                    disabled 
                    value="${task.description}" 
                    type="text" id="input-with-task" 
                    data-index="${task.index}"/>
                    <i class="fa-solid fa-ellipsis-vertical edit-task" data-index="${
  task.index
}"></i>
                    <i class="fa-solid fa-trash-can" data-index="${
  task.index
}"></i>
                </li>  
                <button id="submit" type="submit" hidden></button> 
      </form>            
      <hr>`;
  }
}

module.exports = UI;
