const redux = require("redux");
const { reducer } = require("./reducer");

test("Initial state should be 0.", () => {
  const store = redux.createStore(reducer);
  expect(store.getState()).toBe(0);
})