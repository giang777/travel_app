const initialState = {
  typeOfRoom: {
    name: "",
    price: "",
    slot: "",
  },
};
export const ADD_TYPE_OF_ROOM = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TYPE_OF_ROOM":
      return { ...state, typeOfRoom: action.payload };

    case "UPDATE_TYPE_OF_ROOM":
      return {
        ...state,
        typeOfRoom: {
          ...state.typeOfRoom,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case "RESET_STATE":
      return initialState;
    default:
      return { ...state };
  }
};
