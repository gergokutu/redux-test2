const redux = require("redux");
const { reducer } = require("./reducer");

test("Initial state should be 0", () => {
  const store = redux.createStore(reducer);
  expect(store.getState()).toBe(0);
});

test("ADD should work as expected", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "ADD",
    payload: 1
  });

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

