export const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const registerUser = (user) => ({
  type: "REGISTER_USER",
  payload: user,
});

export const addHotel = (hotel) => ({
  type: "ADD_HOTEL",
  payload: hotel,
});
export const addTypeOfRoom = (typeOfRoom) => ({
  type: "ADD_TYPE_OF_ROOM",
  payload: typeOfRoom,
});

export const rememberAccount = (rememberPassword) => ({
  type: "TOGGLE_SAVE_ACCOUNT",
  payload: rememberPassword,
});

export const saveAccount = (account) => ({
  type: "SAVE_ACCOUNT",
  payload: account,
});
