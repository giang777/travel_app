const initState = {
  user: {
    username: "",
    password: "",
  },
};
export const SAVE_ACCOUNT = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_ACCOUNT":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
