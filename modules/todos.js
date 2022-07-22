/* eslint-disable import/prefer-default-export */
// import { Store } from './store.js';
const Store = require('./store.js');

// Classes
export class Task {
  constructor(description) {
    this.index = Store.getTasksList().length + 1;
    this.completed = false;
    this.description = description;
  }
}
