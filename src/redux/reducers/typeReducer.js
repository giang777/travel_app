export const initialState = {
  first: 0,
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