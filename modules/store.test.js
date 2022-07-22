/**
 * @jest-environment jsdom
 */

const Store = require("./store");

describe("add or removing task", () => {
  test("adding task", () => {
    const data = {
      index: 1,
      completed: false,
      description: "wash dishes",
    };
    expect(Store.addTask(data)).toEqual(data);
  });
});
