import './style.css';
import { todoTasks } from '../modules/todos.js';

// Selectors
const todoListUl = document.querySelector('.todo-list');

todoTasks.forEach((todoTask) => {
  todoListUl.innerHTML += `
   <li>
       <input type="checkbox">
       <span>${todoTask.description}</span>
       <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>    
  <hr>              
  `;
});
