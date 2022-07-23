/**
 * @jest-environment jsdom
 */

const Store = require('./store.js');
const UI = require('./ui.js');

describe('add or removing task', () => {
  test('adding task', () => {
    const data = {
      index: 1,
      completed: false,
      description: 'wash dishes',
    };
    expect(Store.addTask(data)).toEqual(data);
  });

  test('Remove list test', () => {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
    expect(Store.remove(3)).toEqual(todoTasks[2]);
  });

  test('Remove one new item to the list', () => {
    document.body.innerHTML = `
    <section id="todo-list">
    <div class="title">
      <h1>Today's To Do</h1>
      <i class="fa-solid fa-arrows-rotate"></i>
    </div>
    <hr />
    <form id="add-task-form">
      <input type="text" placeholder="Add to your list..." id="description"/>
      <button id="submit" type="submit" hidden></button>
    </form>
    <hr />
    <ul class="todo-list"></ul>
    <div class="clear-btn">
      <span>Clear all completed</span>
    </div>
  </section>
    `;

    const todoListUl = document.querySelector('.todo-list');
    UI.addTaskToList('heloo');
    expect(todoListUl.childNodes.length).toBe(4);
  });

  test('Update list test', () => {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
    expect(Store.remove(3, 'Read a novel')).toEqual(todoTasks[2], 'Read a novel');
  });

  test('Clear completed test', () => {
    const completedTask = [
      {
        index: 1,
        completed: false,
        description: 'wash dishes',
      },
      {
        index: 2,
        completed: false,
        description: 'read one chapter of atomic habits',
      },
    ];
    expect(Store.clearAllCompleted(completedTask)).toEqual(completedTask);
  });
});
