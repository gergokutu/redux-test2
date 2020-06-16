const initialState = [];

function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_ALBUM":
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

function getGenreStats(storeState) {
  return storeState.reduce((acc, curr) => {
    let key = curr["genre"];

    if (!acc[key]) {
      acc[key] = 0;
    };
     
    acc[key]++;
    return acc;
  }, {}); // reducer starts with an empty object => {}
};

module.exports = { reducer, getGenreStats };