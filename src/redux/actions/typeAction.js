export const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})