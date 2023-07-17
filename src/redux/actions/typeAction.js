export const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});