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

test("Switching to and from dark mode works", () => {
  const store = redux.createStore(reducer);
  // expect(store.getState().darkMode).toBe("false");
  expect(store.getState().darkMode).toBeFalsy();

  store.dispatch({
    type: "TOGGLE_DARK_MODE"
  });
  // expect(store.getState().darkMode).toBe(true);
  expect(store.getState().darkMode).toBeTruthy();

  store.dispatch({
    type: "LOGIN",
    payload: {
      firstName: "Bla",
      lastName: "op 't Bla",
      age: 1234,
    },
  });

  expect(store.getState().darkMode).toBe(true);

  store.dispatch({
    type: "LOGOUT",
  });

  expect(store.getState().darkMode).toBe(true); 
});