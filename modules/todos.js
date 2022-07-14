/* eslint-disable import/prefer-default-export */
import { Store } from "../modules/store.js";

// Classes
export class Task {
  constructor(description) {
    this.index = Store.getTasksList().length + 1;
    this.completed = false;
    this.description = description;
  }
}
