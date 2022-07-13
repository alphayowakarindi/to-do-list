/* eslint-disable import/prefer-default-export */
// Selectors
const addTaskForm = document.querySelector('#add-task-form');

export const todoTasks = [];

// Classes
class Task {
  constructor(description) {
    this.index = todoTasks.length;
    this.completed = false;
    this.description = description;
  }
}

// Event listners
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('#description').value;
  if (!description) return;
  const task = new Task(description)
});
