import AsyncStorage from "@react-native-async-storage/async-storage";

const REFRESH_TOKEN = "REFRESH_TOKEN";
const USER_DATA_LOGIN = "USER_DATA_LOGIN";
const USER_INFORMATION = "USER_INFORMATION";
const NEW_USER = "NEW_USER";
const SharedPreferences = {
  GET_TOKEN: async () => {
    return await AsyncStorage.getItem(REFRESH_TOKEN);
  },

  GET_NEW_USER: async () => {
    return await AsyncStorage.getItem(NEW_USER);
  },

  GET_USER_INFOR: async () => {
    return await AsyncStorage.getItem(USER_INFORMATION);
  },

  GET_USER_DATA: async () => {
    return await AsyncStorage.getItem(USER_DATA_LOGIN);
  },

  SET_TOKEN: async (data) => {
    await AsyncStorage.setItem(REFRESH_TOKEN, data);
  },

  SET_NEW_USER: async (data) => {
    return await AsyncStorage.setItem(NEW_USER, data);
  },

  SET_USER_DATA: async (userData) => {
    await AsyncStorage.setItem(USER_DATA_LOGIN, JSON.stringify(userData));
  },
  SET_USER_INFO: async (userInfo) => {
    await AsyncStorage.setItem(USER_INFORMATION, JSON.stringify(userInfo));
  },
  RESET_ALL: async () => {
    try {
      await AsyncStorage.removeItem(REFRESH_TOKEN);
      await AsyncStorage.removeItem(USER_INFORMATION);
      await AsyncStorage.removeItem(USER_DATA_LOGIN);
      // Các mục khác mà bạn muốn reset cũng cần được thêm vào đây

      console.log("All data has been reset.");
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  },
};

export default SharedPreferences;
