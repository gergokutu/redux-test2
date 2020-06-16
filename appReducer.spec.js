const redux = require("redux");
const { reducer } = require("./appReducer");

test("User initially is not logged in", () => {
  const store = redux.createStore(reducer);
  expect(store.getState().user).toBe(null);
})