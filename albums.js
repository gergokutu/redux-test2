const redux = require("redux");
const { reducer } = require("./albumReducer");
const store = redux.createStore(reducer);
console.log("Initial state: ", store.getState());

store.subscribe(() => {
  console.log("Changed state: ", store.getState());
});

store.dispatch({
  type: "ADD_ALBUM",
  payload: {
    title: "Landmarks",
    artist: "Brian Blade & The Fellowship Band",
    genre: "jazz"
  }
});

store.dispatch({
  type: "ADD_ALBUM",
  payload: {
    title: "SSSSSS",
    artist: "sssssssss",
    genre: "jazz"
  }
});

console.log("2nd album: ", store.getState()[1]);