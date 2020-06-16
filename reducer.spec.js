const redux = require("redux");
const { reducer } = require("./reducer");

test("Initial state should be 0", () => {
  const store = redux.createStore(reducer);
  expect(store.getState()).toBe(0);
});

test("ADD should work as expected", () => {
  // Mock a redux store
  const store = redux.createStore(reducer);

  // Dispatch an action
  store.dispatch({
    type: "ADD",
    payload: 1
  });

  // Define the expected result
  expect(store.getState()).toBe(1);
});

test("REPLACE should work as expected", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "REPLACE",
    payload: 222
  });

  expect(store.getState()).toBe(222);
});

test("SQUARE should work as expected", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "SQUARE",
    payload: 3
  });

  expect(store.getState()).toBe(9);
});

test("SQUARE should work as expected", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "SQUARE",
    payload: -10
  });

  expect(store.getState()).toBe(100);
});

