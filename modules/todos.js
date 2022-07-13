/* eslint-disable import/prefer-default-export */
// Selectors
const addTaskForm = document.querySelector('#add-task-form')

export const todoTasks = [];

// Event listners
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const description = document.querySelector('#description').value;
  if(!description) return
})