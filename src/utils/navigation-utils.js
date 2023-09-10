// NavigationUtils.js
import { StackActions} from "@react-navigation/native";

export const changeScreen = (navigation, nameScreen, second) => {
  setTimeout(() => {
    navigation.dispatch(StackActions.replace(nameScreen));
  }, second ?? 3000);
};
export const changeScreenWithOutTime = (navigation, nameScreen) =>
navigation.dispatch(StackActions.replace(nameScreen));


