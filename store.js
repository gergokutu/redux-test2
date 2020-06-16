const redux = require("redux");
const { reducer } = require("./reducer");
const store = redux.createStore(reducer);

// Runs the callbeck
// When an action dispatched to the store
store.subscribe(() => {
  console.log("Initial state of the store:", store.getState());
})

