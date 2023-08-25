 const initialState = {
  first: 0,
};

 const register = {
  user: {
    userName: '',
    passWord: ''
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

export const REGISTER = (state = register, action) => {
  switch(action.type){
    case "REGISTER_USER":
      return{
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}