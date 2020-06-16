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

module.exports = { reducer };