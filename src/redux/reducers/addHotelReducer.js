 const initialState = {
  hotel: {
    name: "",
    id_owner: "",
    address: "",
    description: "",
    open_time: "",
    close_time: "",
    hotline:"",
    place: "",
    image:[
      { uri: " ", key: "1" },
      { uri: " ", key: "2" },
      { uri: " ", key: "3" },
      { uri: " ", key: "4" },
      { uri: " ", key: "5" },
      { uri: " ", key: "6" },
    ]
  },
};
export const ADD_HOTEL = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOTEL":
      return {
        ...state,
        hotel: action.payload,
      };
      case "UPDATE_HOTEL_FIELD":
      return {
        ...state,
        hotel: {
          ...state.hotel,
          [action.payload.fieldName]: action.payload.value,
        },
      };
      case "UPDATE_IMAGE_DATA":
      return {
        ...state,
        hotel: {
          ...state.hotel,
          image: action.payload,
        },
      };
      case "RESET_STATE":
        return initialState;
    default:
      return state;
  }
};
