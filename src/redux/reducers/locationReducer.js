const initialState = {
  provinces: [],
  districts: [],
  wards: [],
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROVINCES":
      return {
        ...state,
        provinces: action.payload,
      };
    case "SET_DISTRICTS":
      return {
        ...state,
        districts: action.payload,
      };
    case "SET_WARDS":
      return {
        ...state,
        wards: action.payload,
      };
    default:
      return state;
  }
};
