const redux = require("redux");
const { reducer } = require("./appReducer");
const store = redux.createStore(reducer);
console.log("Initial state: ", store.getState());