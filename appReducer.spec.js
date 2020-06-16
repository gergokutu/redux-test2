const redux = require("redux");
const { reducer } = require("./appReducer");

test("User initially is not logged in", () => {
  const store = redux.createStore(reducer);
  expect(store.getState().user).toBe(null);
});

test("User can log in", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      firstName: "Heay",
      lastName: "Joe",
      age: 999
    }
  });

  // ToEqual validates the structire of the object
  expect(store.getState().user).toEqual({
    firstName: "Heay",
    lastName: "Joe",
    age: 999
  });
});

test("User can logout", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      firstName: "Heay",
      lastName: "Joe",
      age: 999
    }
  });

  store.dispatch({
    type: "LOGOUT"
  });

  expect(store.getState().user).toBe(null);
});

test("Update logged in user", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      firstName: "Heay",
      lastName: "Joe",
      age: 999
    }
  });

  store.dispatch({
    type: "UPDATE_LOGGEDIN_USER",
    payload: {
      age: 0,
      pet: "cat"
    }
  });

  expect(store.getState().user).toEqual({
    firstName: "Heay",
    lastName: "Joe",
    age: 0,
    pet: "cat"
  });
});