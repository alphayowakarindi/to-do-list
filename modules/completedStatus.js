export class CompletedStatus {
  static updateCompletedStatus(objIndex) {
    const todoTasks = JSON.parse(localStorage.getItem("todoTasks"));
    const todoToUpdate = todoTasks[objIndex - 1];

    // update completed
    todoToUpdate.completed = true;

    // Save update array
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }
}
