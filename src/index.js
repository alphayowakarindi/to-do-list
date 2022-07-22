import './style.css';
import { Task } from '../modules/todos.js';
import { CompletedStatus } from '../modules/completedStatus.js';

const UI = require('../modules/ui.js');

const Store = require('../modules/store.js');

// Selectors
const addTaskForm = document.querySelector('#add-task-form');
const todoListUl = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');

// Event listners
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('#description').value;
  if (!description) return;
  const task = new Task(description);
  Store.addTask(task);
  document.querySelector('#description').value = '';
  UI.addTaskToList(task);
});

// Event listners
document.addEventListener('DOMContentLoaded', UI.displayTasksToUI);

todoListUl.addEventListener('click', (e) => {
  const element = e.target;

  if (element.classList.contains('edit-task')) {
    element.previousElementSibling.disabled = false;
    element.previousElementSibling.style.backgroundColor = '#ffffb3';
    element.parentElement.style.backgroundColor = '#ffffb3';
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'inline-block';
  }

  if (element.classList.contains('fa-trash-can')) {
    const objIndex = Number(element.dataset.index);
    // Remove from local storage
    Store.remove(objIndex);
    // Remove from dom
    element.parentElement.remove();
  }

  if (element.classList.contains('input-with-task')) {
    const objIndex = Number(element.dataset.index);
    const updateForm = element.parentElement.parentElement;
    updateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // update input in the dom
      const updatedValue = element.value;
      element.disabled = true;
      element.parentElement.style.backgroundColor = '';
      element.style.backgroundColor = '';
      // hide delete icon
      element.nextElementSibling.nextElementSibling.style.display = 'none';
      // show edit icon
      element.nextElementSibling.style.display = 'inline-block';

      // update in the local storage as well
      Store.update(objIndex, updatedValue);
    });
  }

  // Updating completed status
  if (element.classList.contains('completed-status-checkbox')) {
    const objIndex = Number(element.dataset.index);
    CompletedStatus.updateCompletedStatus(objIndex, element);
  }
});

clearBtn.addEventListener('click', () => {
  const todoTasks = Store.getTasksList();

  const inCompletedTodoTasks = todoTasks.filter(
    (todoTask) => !todoTask.completed,
  );

  // update indexes of the incompleted todos
  inCompletedTodoTasks.forEach((inCompletedTodoTask, index) => {
    inCompletedTodoTask.index = index + 1;
  });

  // save incompleted todos
  localStorage.setItem('todoTasks', JSON.stringify(inCompletedTodoTasks));

  // remove completed todos from the dom
  const completedElements = document.querySelectorAll('.line-through');
  completedElements.forEach((completedElement) => {
    // remove the li element
    completedElement.parentElement.remove();
  });
});
