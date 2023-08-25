// NavigationUtils.js
import { StackActions, NavigationAction } from "@react-navigation/native";

export const changeScreen = (navigation, nameScreen, second) => {
  setTimeout(() => {
    navigation.dispatch(StackActions.replace(nameScreen));
  }, second ?? 3000);
};
export const changeScreenWithOutTime = (navigation, nameScreen) =>
navigation.dispatch(StackActions.replace(nameScreen));

export const navigateWithoutClearingStack = (navigation, routeName, params) => {
  const navigateAction = NavigationAction.navigate({
    routeName,
    params,
  });

  navigation.dispatch(navigateAction);
};
