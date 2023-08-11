import AsyncStorage from "@react-native-async-storage/async-storage";

const REFRESH_TOKEN = "REFRESH_TOKEN";
const USER_DATA_LOGIN = "USER_DATA_LOGIN";

const SharedPreferences = {
  GET_TOKEN: async () => {
    return await AsyncStorage.getItem(REFRESH_TOKEN);
  },

  SET_TOKEN: async (data) => {
    await AsyncStorage.setItem(REFRESH_TOKEN, data);
  },

  SET_USER_DATA: async (userData) => {
    await AsyncStorage.setItem(USER_DATA_LOGIN, JSON.stringify(userData));
  },

  
};

export default SharedPreferences;
