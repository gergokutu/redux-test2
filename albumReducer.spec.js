const redux = require("redux");
const { reducer } = require("./albumReducer");

test("Initial state is an empty array", () => {
  const store = redux.createStore(reducer);
  expect(store.getState()).toEqual([]);
});

test("Adding new albums possible", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz"
    }
  });

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "Landmarks",
      artist: "Brian Blade & The Fellowship Band",
      genre: "jazz"
    }
  });

  expect(store.getState()).toEqual([
    {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz"
    },
    {
      title: "Landmarks",
      artist: "Brian Blade & The Fellowship Band",
      genre: "jazz"
    }
  ]);
});