export const initialState = {
  hotel: {
    name: "",
    id_owner: "",
    address: "",
    description: "",
    open_time: "",
    close_time: "",
    hotline: "",
    place: "",
  },
};
export const ADD_HOTEL = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOTEL":
      return {
        ...state,
        hotel: action.payload,
      };
    default:
      return state;
  }
};
