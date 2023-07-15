export const initialState = {
  first: 0,
  username: '',
  password: '',

};

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

export const AUTH_REDUCER = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};