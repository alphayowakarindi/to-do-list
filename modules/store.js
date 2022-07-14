/* eslint-disable import/prefer-default-export */
export class Store {
  static getTasksList() {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    return todoTasks;
  }

  static addTask(task) {
    const todoTasks = Store.getTasksList();
    todoTasks.push(task);
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }

  static remove(objIndex) {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
    const filtereTododTasks = todoTasks.filter(
      (todoTask) => todoTask.index !== objIndex,
    );

    // Update indexes of the todo tasks objects
    filtereTododTasks.forEach((filtereTododTask, index) => {
      filtereTododTask.index = index + 1;
    });
    localStorage.setItem('todoTasks', JSON.stringify(filtereTododTasks));
  }

  static update(objIndex, value) {
    const todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
    const todoToUpdate = todoTasks[objIndex - 1];

    // update description
    todoToUpdate.description = value;

    // Save update array
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }
}
