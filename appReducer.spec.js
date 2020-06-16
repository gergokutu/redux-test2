const redux = require("redux");
const { reducer } = require("./appReducer");

test("User initially is not logged in", () => {
  const store = redux.createStore(reducer);
  expect(store.getState().user).toBe(null);
});

test("", () => {
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