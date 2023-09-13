const initState = {
  rememberPassword: false,
};
export const REMEMBER_ACCOUNT = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_SAVE_ACCOUNT":
      return {
        ...state,
        rememberPassword: action.payload,
      };
    default:
      return state;
  }
};
