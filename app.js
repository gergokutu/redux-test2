const redux = require("redux");
const { reducer } = require("./appReducer");
const store = redux.createStore(reducer);
console.log("Initial state: ", store.getState());

store.subscribe(() => {
  console.log("State changed: ", store.getState())
});

store.dispatch({
  type: "LOGIN",
  payload: {
    firstName: "Joe",
    lastName: "Pocok",
    age: 23
  }
});

store.dispatch({
  type: "UPDATE_LOGGEDIN_USER",
  payload: {
    age: 999
  }
});

store.dispatch({
  type: "LOGOUT"
});