import _ from "lodash";
import "./style.css";

// Selectors
const todoListUl = document.querySelector(".todo-list");

const todoTasks = [
  {
    index: 0,
    description: "washing the dishes",
    completed: true,
  },
  {
    index: 1,
    description: "complete To Do list project",
    completed: true,
  },
  {
    index: 1,
    description: "fix car",
    completed: true,
  },
];

todoTasks.forEach((todoTask) => {
  todoListUl.innerHTML += `
   <li>
       <input type="checkbox">
       <span>${todoTask.description}</span>
       <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>                  
  `;
});
