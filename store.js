const redux = require("redux");
const { reducer } = require("./reducer");
const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());
