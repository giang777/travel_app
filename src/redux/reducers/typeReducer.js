export const initialState = {
  first: 0,
};
const userData = {
  userinfo: {},
}
const registerUser = {
  userpassword: {
    userName: '',
    fullName: '',
    passWord: '',
    re_password: ''
  }
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
    case 'LOGIN_USER':
      return {
        ...state,
        userinfo: action.payload,
      };

    default:
      return state;
  }
};
export const REGISTER_REDUCER = (state = registerUser, action) => {
  switch (action.type) {
    case 'REGISTER_USER/USERPASSWORD':
      return {
        ...state,
        userpassword: action.payload
      };

    default:
      return state;
  }
};