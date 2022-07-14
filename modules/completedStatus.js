export class CompletedStatus {
  static updateCompletedStatus(objIndex, element) {
    element.nextElementSibling.classList.toggle("line-through");

    const todoTasks = JSON.parse(localStorage.getItem("todoTasks"));

    const todoToUpdate = todoTasks[objIndex - 1];

    todoToUpdate.completed = !todoToUpdate.completed;
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
  }
}
