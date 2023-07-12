const initialState = {
    width: 0,
    height: 0,
  };
  
  const dimensionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_WIDTH':
        return {
          ...state,
          width: action.payload,
        };
      case 'UPDATE_HEIGHT':
        return {
          ...state,
          height: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dimensionsReducer;