export const initialState = {
  first: 0,
};
const userData = {
  userinfo: {},
}

export const TYPE_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        first: state.first + 1,
      };
    default:
      return state;
  }
};

export const AUTH_REDUCER = (state = userData, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userinfo: action.payload,
      };
  
    default:
      return state;
  }
};