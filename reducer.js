const initialState = 0;

function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "REPLACE": {
      return action.payload;
    } 
    case "SQUARE": {
      return action.payload * action.payload;
    } 
    default: {
      return state;
    }  
  }
};

module.exports = { reducer };