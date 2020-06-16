const redux = require("redux");
const { reducer } = require("./reducer");
const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());

// Runs the callbeck
// When an action dispatched to the store
store.subscribe(() => {
  console.log("Initial state of the store:", store.getState());
});

// Dispatch actions to the store
store.dispatch({
  type: "ADD",
  payload: 42
});

store.dispatch({
  type: "REPLACE",
  payload: 5
});

