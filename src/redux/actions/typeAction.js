export const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};

export const setUser = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
});
export const registerUser = (user) => ({
  type: 'REGISTER_USER/USERPASSWORD',
  payload: user,
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})