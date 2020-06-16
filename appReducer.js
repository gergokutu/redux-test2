const initialState = {
  user: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    } 
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_LOGGEDIN_USER":
      if (!state.user) {
        // Not currently logged in,
        // So this doesn't make sense
        return state;
      }
      return {
        ...state,
        user: {
          // Copy over all current user info,
          ...state.user,
          // and then add updates
          ...action.payload,
        },
      };
    default: {
      return state;
    }
  }
};